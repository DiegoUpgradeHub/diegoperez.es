import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {

  currentUser: any = {};
  messages: any = [];

  constructor(
    public authService: AuthService,
    public messagesService: MessagesService,
    public actRoute: ActivatedRoute,
    public router: Router,
  ) {
    // let id = this.actRoute.snapshot.paramMap.get('_id');
    let id = localStorage.getItem('_id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
    this.messagesService.getMessages().subscribe(res => {
      this.messages = res;
    })
  };

  ngOnInit(): void {};

}
