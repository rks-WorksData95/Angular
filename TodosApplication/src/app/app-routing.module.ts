import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './route-guard.service';
import { TodoDataComponent } from './todo-data/todo-data.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  // {path:'welcome/:name',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'welcome',component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'logout',component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:'todos', component:TodosComponent, canActivate:[RouteGuardService]},
  {path:'todos/:id', component:TodoDataComponent, canActivate:[RouteGuardService]},

  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
