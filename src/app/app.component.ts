import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Update the path to the AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  // ... Other component logic ...
}
