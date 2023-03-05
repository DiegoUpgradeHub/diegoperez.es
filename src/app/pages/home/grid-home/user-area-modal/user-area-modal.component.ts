import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-area-modal',
  templateUrl: './user-area-modal.component.html',
  styleUrls: ['./user-area-modal.component.scss']
})
export class UserAreaModalComponent {

  constructor(
    public router: Router,
  ) { }

  logInPage() {
    this.router.navigate(['log-in']);
  }

  registerPage() {
    this.router.navigate(['sign-up']);
  }

}
