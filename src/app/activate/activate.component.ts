import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.paramMap.get('token') ?? '';

    if (this.route.url === `/user/activate/${this.token}` && this.token !== '') {
      this.activateAccount();
    } else {
      // this.route.navigate(['/']);
      this.msg = 'Conta ativação erro';
    }
  }

  private readonly API = `${environment.API}`;

  msg: string = '';
  token: string = '';
  activation: boolean = true;

  activateAccount() {
    axios.patch(`${this.API}user/activate/${this.token}`, { activation: this.activation })
      .then(res => {
        this.msg = 'Conta ativada com sucesso';
      })
      .catch(res => {
        this.msg = 'Erro ao ativar conta';
      });
  }
}