import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.formulario = this.fb.group({});
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })
  }

  onLogin() {
    this.auth.login(this.formulario.getRawValue());
  }
  completarUser1() {
    this.formulario.setValue({ email: 'mariano@gmail.com', password: '123456789' });
  }
  completarUser2() {
    this.formulario.setValue({ email: 'cintia@gmail.com', password: '123456789' });
  }
  completarUser3() {
    this.formulario.setValue({ email: 'juan@gmail.com', password: '123456789' });
  }

}
