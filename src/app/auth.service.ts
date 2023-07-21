import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {
  student_details = [
    // Your student details here
  ];

  isLoggedIn: boolean = false; // Flag to check if the user is logged in

  constructor(private authService: AuthService) {
    // Subscribe to authService.isLoggedIn changes
    this.authService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }
}