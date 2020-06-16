import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {LoginService} from '../../login/services/login.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    console.log(url);
    if (url.includes('login') || url.includes('sign-up')) {
      return this.loginService.isLoggedIn()
        .pipe(
          map((loggedIn) => {
            if (loggedIn) {
              this.router.navigate(['/']);
              return false;
            }
            return true;
          })
        );
    }
    return this.loginService.isLoggedIn();
  }
}
