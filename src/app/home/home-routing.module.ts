import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeContainerComponent} from './containers/home-container/home-container.component';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
