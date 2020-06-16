import {Component, OnInit} from '@angular/core';
import {LoginService} from './login/services/login.service';
import {Observable} from 'rxjs';
import {CognitoUser} from './login/models/login.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'notes-ui';
  user$: Observable<CognitoUser>;
  loggedIn$: Observable<boolean>;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.user$ = this.loginService.user();
    this.loggedIn$ = this.loginService.isLoggedIn();
  }

  onLogout() {
    this.loginService.doLogout()
      .then(() => this.router.navigate(['/login']));
  }
}
