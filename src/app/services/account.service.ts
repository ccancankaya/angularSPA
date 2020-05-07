import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  loggedIn=false;
  login(user: User): boolean {
    if (user.email == "abc@gmail.com" && user.password == "1234") {
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.email);
      return true;
    }
    else {
      return false;
    }
  }

  isLogedIn()
  {
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  } 
}
