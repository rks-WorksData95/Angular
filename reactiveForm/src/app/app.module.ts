import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfieComponent } from './profie/profie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatDialogModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {DialogModule} from "primeng/dialog";
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';

import { RegistrationComponent } from './registration/registration.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageUploadServerComponent } from './image-upload-server/image-upload-server.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFullFormComponent } from './dynamic-full-form/dynamic-full-form.component';
import { LoginComponent } from './login/login.component';
import { OpenDialogBoxComponent } from './open-dialog-box/open-dialog-box.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfieComponent,
    RegistrationComponent,
    ListUserComponent,
    ImageUploadComponent,
    ImageUploadServerComponent,
    DynamicFormComponent,
    DynamicFullFormComponent,
    LoginComponent,
    OpenDialogBoxComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    DialogModule,
    ButtonModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OpenDialogBoxComponent]
})
export class AppModule { }
