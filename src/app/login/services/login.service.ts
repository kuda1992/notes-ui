import {Injectable} from '@angular/core';
import {Auth} from 'aws-amplify';
import {CognitoUser, LoginDetails} from '../models/login.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user$: BehaviorSubject<CognitoUser> = new BehaviorSubject(null);

  constructor() {
  }


  user(): Observable<CognitoUser> {
    return this.user$.asObservable().pipe(tap(console.log));
  }

  isLoggedIn(): Observable<boolean> {
    return this.user$.asObservable()
      .pipe(
        map((user: CognitoUser) => user !== null),
      );
  }

  async doLoginIn(details: LoginDetails) {

    try {
      const result = await Auth.signIn(details.email, details.password);
      this.user$.next(result as CognitoUser);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async doSignUp(details: LoginDetails) {
    try {
      await Auth.signUp(details.email, details.password);
      return null;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async doLogout(): Promise<any> {
    try {
      const result = await Auth.signOut();
      this.user$.next(null);
      return null;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
