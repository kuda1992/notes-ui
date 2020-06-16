import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../login/services/login.service';
import {LoginDetails} from '../../../login/models/login.model';

@Component({
  selector: 'app-sign-up-container',
  templateUrl: './sign-up-container.component.html',
  styleUrls: ['./sign-up-container.component.scss']
})
export class SignUpContainerComponent implements OnInit {

  loading = false;
  error = null;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }


  onSignup(details: LoginDetails): void {
    this.loginService.doSignUp(details);
  }

}
