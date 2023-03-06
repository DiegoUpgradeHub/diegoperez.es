import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
