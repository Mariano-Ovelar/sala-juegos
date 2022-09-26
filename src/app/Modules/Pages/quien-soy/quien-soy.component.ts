import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss']
})
export class QuienSoyComponent implements OnInit {


  public foto: string = "../assets/foto-perfil.jpeg";
  public nombre: string = "Mariano Ovelar";
  public email: string = "marianoovelar200@gmail.com";
  public tel: string = "01127329747";
  public legajo: string = "106132";
  public nombreJuego: string = "Descripcion del Juego";
  public descpcionJuego: string = "No se a credo nigun juego";


  constructor() {

  }

  ngOnInit(): void {

  }


}
