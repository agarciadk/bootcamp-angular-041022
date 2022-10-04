import { Component, DoCheck, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck  {
  auth: boolean = false;
  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.auth = this.loginService.isLoggedin();
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    if (this.auth !== this.loginService.isLoggedin()) {
      this.auth = this.loginService.isLoggedin();
    }
  }

  logout() {
    this.loginService.logout();
  }
}
