import {Component, OnInit} from '@angular/core';
import {LoginDetails} from '../../models/login.model';
import {LoginService} from '../../services/login.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  loading = false;
  error: any = null;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(details: LoginDetails) {
    this.loading = true;
    this.loginService.doLoginIn(details)
      .then(() => this.router.navigate(['/']))
      .catch((err) => this.error = err)
      .finally(() => this.loading = false);
  }

}
