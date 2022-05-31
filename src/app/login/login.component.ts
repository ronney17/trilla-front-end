import { Component, OnInit } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.paramMap.get('token') ?? "";

    if(this.token !== ""){
      this.changePswForm();
    }
  }

  private readonly API = `${environment.API}`;

  email: string = '';
  password: string = '';
  title: string = 'Fazer login';
  showForgotPsw: boolean = false;
  btnTitle: string = 'Entrar';
  emailTitle: string = 'Email';
  msg: string = '';
  senhaTitle: string = 'Senha';
  token: string = '';
  showChangePsw: boolean = false;

  //Mostrar senha
  mostrarSenha = true;
  sPsw = "password";

  showPsw() {
    if (this.mostrarSenha == true) {
      this.mostrarSenha = false;
      this.sPsw = "text";
    } else {
      this.mostrarSenha = true;
      this.sPsw = "password";
    }
  }

  //Busca o usuario com o email e senha passadas
  logar(data: JSON) {
    axios.post(`${this.API}login`, data)
      .then((res: AxiosResponse) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', res.data.token);
        this.route.navigate(['/']);
      })
      .catch(res => {
        this.msg = 'E-mail ou senha inválida';
      });
  }

  //Esqueci a senha
  forgotPswForm() {
    this.title = 'Esqueci minha senha';
    this.showForgotPsw = true;
    this.btnTitle = 'Enviar';
    this.emailTitle = 'Informe seu e-mail de cadastro';
  }

  forgotPsw() {
    axios.post(`${this.API}forgot-password`, { email: this.email })
      .then(res => {
        this.msg = 'Link de recuperação de senha enviado com sucesso';
      })
      .catch(res => {
        this.msg = 'Email inválido';
      });
  }

  //Mudar a senha
  changePswForm() {
    this.title = 'Alterar senha';
    this.senhaTitle = 'Nova senha';
    this.showChangePsw = true;
  }

  changePsw() {
    axios.patch(`${this.API}change-password/${this.token}`, { password: this.password })
      .then(res => {
        this.msg = 'Senha atualizada com sucesso';
      })
      .catch(res => {
        this.msg = 'Token inválido';
      });
  }

}
