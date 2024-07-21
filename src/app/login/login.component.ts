import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public username: any;
  public password: any;

  constructor(private router: Router) {

  }


  onSubmit(loginForm: NgForm) {
    console.log("dkjfhsfdkjh")
    if (loginForm.value.username == 'admin' && loginForm.value.password == 'admin123') {
      this.router.navigateByUrl('/admin');
      localStorage.setItem('Role', 'admin');
    } else if (loginForm.value.username == 'user' && loginForm.value.password == 'user123') {
      this.router.navigateByUrl('/user');
      localStorage.setItem('Role', 'user');
    } else {
      alert("Please Enter Valid Credentials");
    }
  }
}
