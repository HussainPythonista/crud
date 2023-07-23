import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Update the path to the AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = false; // Flag to check if the user is logged in

  constructor(private authService: AuthService) {
    // Subscribe to authService.isLoggedIn$ changes
    this.authService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  // ... Other component logic ...
}