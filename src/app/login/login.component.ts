import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginObj: any = {}; // Assuming you have a loginObj to store email and password
  invalid: boolean = false;

  constructor(private router: Router) { }

  onLogin() {
    // Check if the loginObj has email and password
    if (this.loginObj.EmailId && this.loginObj.Password) {
      // Here you can add your login logic
      // For simplicity, let's assume the login is successful

      // Navigate to the "info" page
      this.router.navigate(['info']);
    } else {
      // Handle case where email or password is missing
      console.log('Please provide both email and password.');
    }
  }
}