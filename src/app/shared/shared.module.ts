import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [SignInComponent, SigninModalComponent, SignupComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SignInComponent,
    SignupComponent,
    SigninModalComponent
  ]
})
export class SharedModule { }
