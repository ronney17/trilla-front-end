import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  //Faz o logout do usuário
  login() {
    if (this.isLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  //Faz o logout do usuário
  logout(): void {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("token");
  }

  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem("isLoggedIn") == "true") {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}
