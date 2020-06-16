import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';
import {LoggedInService} from '../shared/services/logged-in.service';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then((m) => m.LoginModule),
    canActivate: [LoggedInService]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('../signup/signup.module').then((m) => m.SignupModule),
    canActivate: [LoggedInService]
  },
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
    canActivate: [LoggedInService]
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule {
}
