import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { DeteteComponent } from './detete/detete.component';



const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'list-students', component: ListStudentsComponent },
  {path:'detete',component:DeteteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }