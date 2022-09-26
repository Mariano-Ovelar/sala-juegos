import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { AlertService } from './alert.service';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public isLogged: boolean;
  constructor(public auth: AngularFireAuth, private router: Router, private firestore: Firestore, private alertService: AlertService) {
    this.isLogged = false;
  }

  /***** login *****/
  async login(usuario: any) {
    return await this.auth.signInWithEmailAndPassword(usuario.email, usuario.password).then(res => {
      console.log("Login exitoso!!!!");
      this.alertService.showAlert("Bienvenido a la sala de juegos!!!!", 4000);
      this.router.navigate(['/home']);
    }).catch(error => {
      console.log("Error: " + error);
    });
  }

  /***** register *****/
  async register(usuario: any) {
    return await this.auth.createUserWithEmailAndPassword(usuario.email, usuario.password).then((res) => {
      console.log("registro exitoso!!!!");
      this.addUsuario(usuario);
      this.login(usuario);
    }).catch(error => {
      console.log("Error al tratar de registrar al usuario: " + error);
      this.alertService.showAlert("El correo elctronico ya esta registrado!!!!", 4000);
    });
  }

  /***** logout *****/
  async logout() {
    return await this.auth.signOut().then((res) => {
      console.log("logout exitoso!!!!");
      this.alertService.showAlert("Esperamos tu regreso para mas divercion!!!!", 4000);
    }).catch(error => {
      console.log("Error: " + error);
    });
  }


  addUsuario(usuario: any) {
    const usuarioRef = collection(this.firestore, 'usuarios');

    return addDoc(usuarioRef,
      { name: usuario.name, email: usuario.email, fechaIngreso: new Date() }
    );
  }
}
