import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import { RegisterUser } from '../models/RegisterUser';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router, private alertifyService: AlertifyService) { }
  path = "https://localhost:44357/api/auth/";
  userToken: any;
  decodedToken: any;
  ExpirationDate:any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  TOKEN_KEY="token"

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + "login", loginUser,{responseType:'text'} )
      .subscribe(data => {
        this.saveToken(data);
        this.userToken = data; 
        this.decodedToken = this.jwtHelper.decodeToken(data);
        this.ExpirationDate=this.jwtHelper.getTokenExpirationDate(data);
        this.alertifyService.success("Sisteme giriş yapıldı");
        this.router.navigateByUrl("/home");
      });
  }

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + "register", registerUser, { headers: headers })
      .subscribe(data=>{
        this.alertifyService.success("Kayıt başarıyla gerçekleştirildi");
        this.router.navigateByUrl("/home");
      });
  }

   get token(){
    return localStorage.getItem(this.TOKEN_KEY);
  }
  saveToken(token) {
    console.log(token);
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY)
    this.router.navigateByUrl("/home");
    this.alertifyService.error("Sistemden çıkış yapıldı");
  }

  loggedIn(){
    let token: string = localStorage.getItem("token");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  getCurrentUser():Observable<User>{
    return this.httpClient.get<User>(this.path+"user/"+this.getCurrentUserId()).pipe(
      tap(data=>{
        console.log(data)
      }),
        catchError(this.handleError))
  }
  getCurrentKitchenId(){
    return this.httpClient.get(this.path+this.getCurrentUserId());
  }
  getCurrentUserId(){
    return this.jwtHelper.decodeToken(this.token).nameid
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage=""
    if (err.error instanceof ErrorEvent) {
      errorMessage='Bir hata meydana geldi '+err.error.message
    }
    else
    {
      errorMessage='Sistemsel bir hata'
    }
  
    return throwError(errorMessage);
  }


}
