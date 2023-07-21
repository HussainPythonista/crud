import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Update the path to the AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: "",
    password: ""
  };
  message: string = "";

  constructor(private router: Router, private authService: AuthService) {}

  checkUser() {
    // Perform login validation (replace the condition with your actual login validation)
    if (this.user.username === "admin" && this.user.password === "admin") {
      // If login is successful, set the isLoggedIn flag to true using the AuthService and navigate to ListStudentsComponent
      this.authService.updateLoggedInStatus(true);
      this.router.navigateByUrl('/list-students');
    } else {
      // If login fails, display error message
      this.message = 'Invalid credentials';
    }
  }
}
