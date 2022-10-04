import { Injectable } from '@angular/core';
import { AUTH_KEY } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private auth: boolean = localStorage.getItem(AUTH_KEY) ? true : false;

  constructor() { }

  isLoggedin() {
    return this.auth;
  }
  authenticate(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem(AUTH_KEY, JSON.stringify(true));
      this.auth = true;
    } else {
      localStorage.setItem(AUTH_KEY, JSON.stringify(false));
      this.auth = false;
    }
  }

  logout() {
    this.auth = false;
    localStorage.removeItem(AUTH_KEY);
  }
}
