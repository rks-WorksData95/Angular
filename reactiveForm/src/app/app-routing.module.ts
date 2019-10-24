import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageUploadServerComponent } from './image-upload-server/image-upload-server.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ProfieComponent } from './profie/profie.component';
import { DynamicFullFormComponent } from './dynamic-full-form/dynamic-full-form.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:'', component:ProfieComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'listUser', component:ListUserComponent},
  {path:'imageUpload', component:ImageUploadComponent},
  {path:'imageUploadServer', component:ImageUploadServerComponent},
  {path:'dynamicForm', component:DynamicFormComponent},
  {path:'dynamicFullForm', component:DynamicFullFormComponent},
  {path:'login', component:LoginComponent},
  {path:'menu', component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
