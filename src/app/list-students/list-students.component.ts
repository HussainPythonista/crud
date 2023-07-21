import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {

    student_details=[{student_name:"Kuppusamy",class:11,Teachername:"Lisa ann"},
    {student_name:"Ramasamy",class:11,Teachername:"Yasmina khan"},
    {student_name:"Karupaiah",class:10,Teachername:"Kissa sins"},
    {student_name:"Munusamy",class:9,Teachername:"Angela white"},
    {student_name:"Sneha",class:8,Teachername:"Abella danger"}]

    constructor(private router: Router){

    }
    deleted() {
      this.router.navigateByUrl("/detete")
        } 

}
