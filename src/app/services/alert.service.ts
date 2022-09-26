import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSource = new Subject();
  alert$ = this.alertSource.asObservable();
  constructor() { }

  showAlert(mensaje: string, time: number = 5000) {
    this.alertSource.next({mensaje,time});
  }
}
