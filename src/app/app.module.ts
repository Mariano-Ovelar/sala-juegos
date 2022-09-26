import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

/* My Components */
import { HomeComponent } from './Modules/Pages/home/home.component';
import { LoginComponent } from './Modules/Pages/login/login.component';
import { RegisterComponent } from './Modules/Pages/register/register.component';
import { JuegosComponent } from './Modules/Pages/juegos/juegos.component';
import { NavbarComponent } from './Modules/navbar/navbar.component';
import { QuienSoyComponent } from './Modules/Pages/quien-soy/quien-soy.component';
import { ChatComponent } from './Modules/chat/chat.component';
import { ErrorComponent } from './Modules/Pages/error/error.component';
import { environment } from 'src/environments/environment';
import { AhorcadoComponent } from './Modules/Pages/Juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './Modules/Pages/Juegos/mayor-menor/mayor-menor.component';
import { MiJuegoComponent } from './Modules/Pages/Juegos/mi-juego/mi-juego.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuienSoyComponent,
    ChatComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    JuegosComponent,
    MiJuegoComponent,
    AhorcadoComponent,
    MayorMenorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
