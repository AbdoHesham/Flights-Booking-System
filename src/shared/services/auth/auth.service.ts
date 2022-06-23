import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  get isLoggedIn() {
   return !!localStorage.getItem("userdata");  

  }

  get isAdminLoggedIn() {
    if (localStorage.getItem('AdminData')) {
      return true;
    }
    return false
  }
}
