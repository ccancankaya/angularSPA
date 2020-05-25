import { Component, OnInit} from '@angular/core';
import {ReactiveFormsModule, FormControl} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ReactiveFormsModule]
})
export class HomeComponent implements OnInit {


  constructor() { 
    
  }

  ngOnInit() {
    document.body.className = "body";
  }
  ngOnDestroy(){
    document.body.className="";
  }
}
