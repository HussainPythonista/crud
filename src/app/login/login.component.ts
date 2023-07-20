import { Component } from '@angular/core';

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

  checkUser() {
    this.message = "Hello";
    this.user.username=this.user.username
    console.log(this.user.username) 
  }
}
