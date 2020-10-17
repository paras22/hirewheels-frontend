import { SignInComponent } from './shared/sign-in/sign-in.component';

import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInModalComponent } from './shared/sign-in-modal/sign-in-modal.component';

const routes: Routes = [

  {
    path:'',
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'signin',
    pathMatch:'full',
    component:SignInComponent
  },
  {
    path:'signin-modal',
    pathMatch:'full',
    component:SignInModalComponent
  },
  {
    path:'**',
    pathMatch:'full',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
