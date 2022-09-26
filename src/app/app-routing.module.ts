import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Modules/Pages/error/error.component';

import { HomeComponent } from './Modules/Pages/home/home.component';
import { AhorcadoComponent } from './Modules/Pages/Juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './Modules/Pages/Juegos/mayor-menor/mayor-menor.component';
import { MiJuegoComponent } from './Modules/Pages/Juegos/mi-juego/mi-juego.component';

import { LoginComponent } from './Modules/Pages/login/login.component';
import { QuienSoyComponent } from './Modules/Pages/quien-soy/quien-soy.component';
import { RegisterComponent } from './Modules/Pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'juego/ahorcado', component: AhorcadoComponent },
  { path: 'juego/mayor-menor', component: MayorMenorComponent },
  { path: 'juego/mi-juego', component: MiJuegoComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
