import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) { }
  ngOnInit(): void {
    if (this.loginService.isLoggedin()) {
      this.router.navigate(['owner']);
    }
  }


  login() {
    this.loginService.authenticate(this.username, this.password);
    if (this.loginService.isLoggedin()) {
      this.router.navigate(['owner']);
    }
  }

}
