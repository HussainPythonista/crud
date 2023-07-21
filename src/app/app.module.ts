import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { DeteteComponent } from './detete/detete.component';

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
        ListStudentsComponent,
        DeteteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
