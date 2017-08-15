import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddCarComponent } from './add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordResetComponent,
    ProfileComponent,
    CreateAdComponent,
    VerifyEmailComponent,
    MainPageComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        component:MainPageComponent
      },
      {
        path:'add-car',
        component:AddCarComponent
      },
      {
        path:'create-ad',
        component:CreateAdComponent
      },
      {
        path:'sign-in',
        component:SignInComponent
      },
      {
        path:'sign-up',
        component:SignUpComponent
      },
      {
        path:'password-reset',
        component:PasswordResetComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'verify-email/:id',
        component:VerifyEmailComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
