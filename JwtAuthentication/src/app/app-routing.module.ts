import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserAccountVerificationComponent } from './user-account-verification/user-account-verification.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:"", component:SignInComponent},
  {path:"SignIn", component:SignInComponent},
  {path:"SignUp", component:SignUpComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:"VerifyUserAccount/:token", component:UserAccountVerificationComponent},
  {path:"ForgotPassword", component:ForgotPasswordComponent},
  {path:"ResetPassword/:token", component:ResetPasswordComponent},
  {path:"Logout", component:LogoutComponent},

  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
