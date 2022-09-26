import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

export class Usuario {
  public nombre: string;
  public email: string;
  public foto: string;
  public password: string;

  constructor() {
    this.nombre = "";
    this.email = "";
    this.password = "";
    this.foto = "";

  }
}
