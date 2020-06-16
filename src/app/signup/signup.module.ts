import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignupRoutingModule} from './signup-routing.module';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SignUpContainerComponent} from './containers/sign-up-container/sign-up-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [SignUpContainerComponent, SignUpComponent],
  imports: [
    FormsModule,
    CommonModule,
    ToastrModule,
    ReactiveFormsModule,
    SignupRoutingModule
  ]
})
export class SignupModule {
}
