import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token') ?? '';

    if (this.route.url === '/account' && this.token !== '') {
      this.showUpdateBtn = true;
      this.myAccount();
    }else{
      this.route.navigate(['/']);
    }
  }

  private readonly API = `${environment.API}`;

  name: string = '';
  cpf: string = '';
  email: string = '';
  birthDate: string = '';
  phone: string = '';
  password: string = '';
  cep: string = '';
  street: string = '';
  number: string = '';
  neighborhood: string = '';
  city: string = '';
  state: string = '';
  msg: string = '';
  complement: string = '';
  token: string = '';
  showUpdateBtn: boolean = false;

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

  register(data: JSON) {
    axios.post(`${this.API}user`, data)
      .then(res => {
        this.msg = 'Link de ativação foi enviado para seu email';
      })
      .catch(res => {
        this.msg = 'Erro ao realizar cadastro';
      });
  }

  myAccount() {
    axios.get(`${this.API}user/${this.token}`)
      .then((res: AxiosResponse) => {
        this.name = res.data.name;
        this.cpf = res.data.cpf;
        this.email = res.data.email;
        this.phone = res.data.phone;
        this.birthDate = res.data.birthDate;
        this.cep = res.data.cep;
        this.street = res.data.street;
        this.number = res.data.number;
        this.neighborhood = res.data.neighborhood;
        this.city = res.data.city;
        this.state = res.data.state;
        this.complement = res.data.complement;
      })
      .catch(res => {
        this.msg = 'Erro ao buscar usuário. \nVerifique se ativou sua conta!';
      });
  }

  updateAccount(data: JSON) {
    axios.patch(`${this.API}user/${this.token}`, data)
      .then(res => {
        this.msg = 'Informações atualizadas';
      })
      .catch(res => {
        this.msg = 'Erro ao atualizar informações';
      });
  }

  //Busca CEP
  async pesquisaCep() {
    this.msg = '';

    const validaCep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validaCep.test(this.cep)) {

      let url = `https://viacep.com.br/ws/${this.cep}/json/`;

      await axios.get(url)
        .then((res: AxiosResponse) => {
          if (res.data.erro) {
            throw new Error();
          }
          this.street = res.data.logradouro;
          this.neighborhood = res.data.bairro;
          this.city = res.data.localidade;
          this.state = res.data.uf;
        }).catch(res => {
          this.msg = 'Endereço não encontrado!';
        });

    } else if (this.cep.length <= 7) {
      this.msg = 'CEP deve conter 8 dígitos e não pode estar vazio';
    }
    else {
      this.msg = 'Digite apenas números no CEP!!!';
    }
  }
}
