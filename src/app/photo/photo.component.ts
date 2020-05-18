import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { FoodService } from '../services/food.service';
import {Photo} from '../models/photo';
import {FileUploader} from 'ng2-file-upload';
import { Food } from '../models/food';
import { Category } from '../models/category';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers:[FoodService,AuthService,CategoryService]
})
export class PhotoComponent implements OnInit {

  constructor(private foodService:FoodService,private authService:AuthService,private alertifyService:AlertifyService,private categoryService:CategoryService,private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute) 
  { 
   
  }

  currentKitchenId:any
  food:Food;
  foodAddForm:FormGroup
  categories:Category[]
  photos:Photo[]=[]
  uploader:FileUploader
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean
  currentMain:Photo
  currentFood:any
  response:string
  foodId:any


  ngOnInit(): void {
    
    this.foodService.latestFoodId().subscribe(data=>{
      this.foodId=data
    });

    this.initilazeUploader()
    
  }

  initilazeUploader(){
    this.uploader = new FileUploader({
      url:'https://localhost:44357/api/food/'+this.foodId+'/photo',
      authToken:'Bearer'+localStorage.getItem("token"),
      isHTML5:true,
      allowedFileType:['image'],
      autoUpload:false,
      removeAfterUpload:true,
      maxFileSize:10*1024*1024
    })
    
    this.uploader.onSuccessItem=(item,response,status,headers)=>{
      //this.response=response
      if(response){
        const res:Photo=JSON.parse(response);
        const photo={
          id:res.id,
          url:res.url,
          createdOn:res.createdOn,
          isMain:res.isMain,
          foodId:res.foodId
        }
        this.photos.push(photo)
        console.log(photo)
      }
    }

    this.hasBaseDropZoneOver=false;
    this.hasAnotherDropZoneOver=false;
  
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }


}
