import { Component, OnInit } from '@angular/core';
import { IPaginaJuego } from 'src/app/Entity/ipagina-juego';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {
  public paginas: Array<IPaginaJuego>;
  constructor() {
    this.paginas=[];
  }

  ngOnInit(): void {
    this.paginas = [
      { link: "/juego/ahorcado", nombre: "Ahorcado" },
      { link: "/juego/mayor-menor", nombre: "Mayor o Menor" },
      { link: "/juego/mi-juego", nombre: "Mi Juego" }
    ];
  }


}
