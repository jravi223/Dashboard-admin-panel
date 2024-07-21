import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getLoggedIn() {
    if (localStorage.length) {
      return true;
    } else {
      return false;
    }
  }
}
