import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entity/class/usuario';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public formulario: FormGroup;
  public usuario: Usuario;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.formulario = this.fb.group({});
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      'email': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'confPassword': ['', [Validators.required]]
    })
  }

  async onRegister() {
    this.auth.register(this.formulario.getRawValue());
  }

  validatePassword(g: FormGroup) {
    return g.value.password === g.value.confPassword
      ? null : { 'mismatch': true };
  }

  get name() {
    return this.formulario.controls['name'];
  }
  get email() {
    return this.formulario.controls['email'];
  }
  get password() {
    return this.formulario.controls['password'];
  }
  get confPassword() {
    return this.formulario.controls['confPassword'];
  }


}
