import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginDetails} from '../../models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  @Input() loading: boolean;
  @Input() error: any;

  @Output() login$: EventEmitter<LoginDetails> = new EventEmitter<LoginDetails>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(details: LoginDetails, valid) {
    console.log('details', details);
    if (valid) {
      this.login$.emit(details);
    }
  }
}
