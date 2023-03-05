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

  signInPage() {
    this.router.navigate(['sign-in']);
  }

  signUpPage() {
    this.router.navigate(['sign-up']);
  }

}
