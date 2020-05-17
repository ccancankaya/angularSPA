import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {CookieService} from 'ngx-cookie-service';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginUser: any = {}
  registerUser:any={}
  registerForm:FormGroup
  router:Router
  
  public remember:boolean=false;
  @ViewChild('loginModal') loginModal;
  constructor(private authService: AuthService,private cookieService:CookieService,private formBuilder:FormBuilder) {
    if(this.cookieService.get('remember')!==undefined){
      if(this.cookieService.get('remember')=="Yes"){
        //this.loginModel.email=this.cookieService.get('email');
        //this.loginModel.password=this.cookieService.get('password');
        this.remember=true;
      }
    }

    this.registerForm=this.formBuilder.group({
      name:["",Validators.required],
      surname:["",Validators.required],
      age:["",Validators.required],
      gender:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(4),Validators.maxLength(16)]],
      confirmPassword:["",Validators.required]
    },
    {validator:this.passwordMatchValidator}
    
    )

   
   }

   passwordMatchValidator(g:FormGroup){
    return g.get('password').value === 
    g.get('confirmPassword').value?null:{mismatch:true}
  }
  ngOnInit() {
  
   
  }

  

  login() {
    this.authService.login(this.loginUser);
    //this.router.navigateByUrl("/home");   
    //window.location.reload(); 
  }

  register(){
    if(this.registerForm.valid){
      this.registerUser=Object.assign({},this.registerForm.value)
      this.authService.register(this.registerUser)
      window.location.reload();
    }
  }


  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl("/home");
    
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }

}
