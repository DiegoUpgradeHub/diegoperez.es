import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/core/services/messages.service';
import { emailPattern } from 'src/app/core/utils/email-validator';

@Component({
  selector: 'app-cv-request',
  templateUrl: './cv-request.component.html',
  styleUrls: ['./cv-request.component.scss']
})
export class CvRequestComponent {

  public cvRequestForm: FormGroup;
  // public isSubmitted: boolean = false;
  public nameFormControl?: FormControl;
  public emailFormControl!: FormControl;

  constructor(
    public fb: FormBuilder,
    public messagesService: MessagesService,
    public router: Router
  ) {
    this.cvRequestForm = this.fb.group({
      name: [''],
      email: [''],
      label: ['cvRequest']
    })
  }

  ngOnInit() {
    this.cvRequestForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      message: ['This is a CV request'],
      label: ['cvRequest']
    });
    this.nameFormControl = this.cvRequestForm.get('name') as FormControl;
    this.emailFormControl = this.cvRequestForm.get('email') as FormControl;
  }

  newCvRequest() {
    this.messagesService.createMessage(this.cvRequestForm.value).subscribe((res) => {
      if (res.result) {
        alert('Request sent successfully');
        this.cvRequestForm.reset()
        window.location.reload();
        // this.router.navigate(['home']);
      }
    })
  }

}
