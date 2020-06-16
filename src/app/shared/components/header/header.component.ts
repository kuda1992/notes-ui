import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CognitoUser} from '../../../login/models/login.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() user: CognitoUser;
  @Input() loggedIn: boolean;

  @Output() logout$: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  logout() {
    this.logout$.emit();
  }
}
