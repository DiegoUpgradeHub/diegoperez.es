import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    public authService: AuthService
  ) { }

  profile() {
    this.authService.userArea();
  }

  logout() {
    this.authService.doLogout();
  }

}
