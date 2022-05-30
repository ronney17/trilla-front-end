import { Component, OnInit } from '@angular/core';
import axios, {AxiosResponse} from 'axios';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  private readonly API = `${environment.API}`;

  email: string = '';
  password: string = '';

  //Busca o usuario com o email e senha passadas
  logar(data: JSON) {
    axios.post(`${this.API}login`, data)
    .then((res: AxiosResponse) => {
      localStorage.setItem('token', res.data.token);
      this.route.navigate(['/']);
    })
    .catch(res => {
      console.log(res.response.data);
    });
  }

  ngOnInit(): void {
  }

}
