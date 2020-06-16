import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginDetails} from '../../../login/models/login.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  @Input() loading: boolean;
  @Input() error: any;

  @Output() signUp$: EventEmitter<LoginDetails> = new EventEmitter<LoginDetails>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  signUp(details: LoginDetails, valid) {
    console.log('details', details);
    if (valid) {
      this.signUp$.emit(details);
    }
  }
}
