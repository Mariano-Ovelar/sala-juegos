import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public menuVisible: boolean = false;
  @Input() user$: Observable<any> = new Observable<any>();
  constructor(private auth: AuthService, public router: Router) {
  }

  ngOnInit(): void {
  }

  mostrarMenu() {
    this.menuVisible = !this.menuVisible;
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
