import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'sala-juegos';
  public user$: Observable<any> = this.authSer.auth.user;
  public showAlert: boolean = false;
  public mensaje: string = "";

  constructor(
    private authSer: AuthService,
    private alertSer: AlertService,
  ) { }
  ngOnInit() {
    this.alertSer.alert$.subscribe((res: any) => {
      console.log(res);
      this.mensaje = res.mensaje;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, res.time);
    })
  }
}
