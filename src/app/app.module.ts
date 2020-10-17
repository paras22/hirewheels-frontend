
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { SignInModalComponent } from './shared/sign-in-modal/sign-in-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SignInModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,

    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
