import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/core/services/messages.service';
import { emailPattern, CompareEmail } from 'src/app/core/utils/email-validator';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public contactMeForm!: FormGroup;
  public nameFormControl?: FormControl;
  public emailFormControl!: FormControl;
  public emailRepeatFormControl!: FormControl;
  public messageFormControl!: FormControl;
  public companyFormControl!: FormControl;
  public termsFormControl!: FormControl;

  public isSubmitted: boolean = false;
  public isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public messagesService: MessagesService,
    public router: Router,

  ){}

  ngOnInit(): void {
    this.initForm()
  }

  public initForm() {
    //FormGroup
    this.contactMeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      emailRepeat: ['', [Validators.required, Validators.pattern(emailPattern)]],
      message: ['', [Validators.required, Validators.maxLength(300)]],
      company: ['', [Validators.required, Validators.maxLength(20)]],
      terms: ['', Validators.required],
      label: ['contactMe']
    },
    {
      validator: CompareEmail('email', 'emailRepeat')
    });

    //FormControls
    this.nameFormControl = this.contactMeForm.get('name') as FormControl;
    this.emailFormControl = this.contactMeForm.get('email') as FormControl;
    this.companyFormControl = this.contactMeForm.get('company') as FormControl;
    this.emailRepeatFormControl = this.contactMeForm.get('emailRepeat') as FormControl;
    this.messageFormControl = this.contactMeForm.get('message') as FormControl;
    this.termsFormControl = this.contactMeForm.get('terms') as FormControl;
  }

  // onSubmit() {
  //   this.isSubmitted = true;
  //   console.log(this.contactMeForm);
  //   if (this.contactMeForm.valid) {
  //     alert('Message sent successfully')
  //     setTimeout(()=> {
  //       window.location.reload();
  //     }, 500);
  //   }

    // if (this.contactMeForm.valid) {
    //   this.isLoading = true;

    //   const message = {
    //     name: this.nameFormControl.value,
    //     email: this.emailFormControl.value,
    //     company: this.companyFormControl.value,
    //     message: this.messageFormControl.value
    //   }
    //   console.log(message);

    //   // alert('Message sent' + JSON.stringify(this.contactMeForm.value, null, 4));
    //   alert('Message sent' + this.nameFormControl.value + this.emailFormControl.value + this.companyFormControl.value + this.messageFormControl.value);

    //   setTimeout(()=> {
    //     window.location.reload();
    //     // this.contactMeForm.reset();
    //     // this.isLoading = false;
    //   }, 500);
    // }
    // this.submitted = false;
    newContactMe() {
      this.messagesService.createMessage(this.contactMeForm.value).subscribe((res) => {
          alert('Message sent successfully');
          window.location.reload();
      })
    }
  }

  // onSubmit() {
    //   this.isSubmitted = true;
    //   console.log(this.contactMeForm);
    //   if (this.contactMeForm.valid) {
    //     alert('Message sent successfully')
    //     setTimeout(()=> {
    //       window.location.reload();
    //     }, 500);
    //   }



