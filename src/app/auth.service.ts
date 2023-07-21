import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  updateLoggedInStatus(value: boolean) {
    this.isLoggedIn = value;
  }
}