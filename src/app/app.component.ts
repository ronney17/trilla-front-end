import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import axios, { AxiosResponse } from "axios";
import { ProductModel } from "./models/product.model";
import { environment } from "src/environments/environment";
import { AuthService } from "./services/auth.service";
import { UserModel } from "./models/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "trilla-front";
  products: ProductModel[] = [];
  logado: boolean = false;
  name: string = "João";
  nomeJogoPesquisado: string = "";

  private readonly API = `${environment.API}`;
  constructor(private authService: AuthService, private route: Router) {
    this.logado = authService.isLoggedIn();
  }

  ngOnInit(): void {
    console.log("isLoggedIn: " + this.logado);

    if (this.logado) {
      const token: string = localStorage.getItem("token") ?? "";
      axios
        .get(`${this.API}user/${token}`)
        .then((res: AxiosResponse) => {
          this.name = res.data.name;
          this.name.split(" ");
        })
        .catch((res) => {
          console.error(res);
        });
    }
    this.getProducts();
  }

  logout() {
    this.authService.logout();
  }

  getProducts() {
    axios
      .get(`${this.API}product`)
      .then((res: AxiosResponse) => {
        this.products = res.data.slice(0, 3);
      })
      .catch((res) => {
        console.error(res);
      });
  }

  buscarJogosPeloNome() {
    axios
      .get(`${this.API}products/${this.nomeJogoPesquisado}`)
      .then((res: AxiosResponse) => {
        this.products = res.data;
      })
      .catch((res) => {
        console.error(res);
      });
  }
}
