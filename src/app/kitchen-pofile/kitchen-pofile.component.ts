import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';
import { KitchenAdd } from '../models/kitchenAdd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { AuthService } from '../services/auth.service';
import { Kitchen } from '../models/Kitchen';

@Component({
  selector: 'app-kitchen-pofile',
  templateUrl: './kitchen-pofile.component.html',
  styleUrls: ['./kitchen-pofile.component.css'],
  providers:[CategoryService,KitchenService,AuthService]
})
export class KitchenPofileComponent implements OnInit {

  status:boolean
  kitchen:KitchenAdd;
  Kitchen:Kitchen
  constructor(private kitchenService:KitchenService,private formBuilder:FormBuilder,private alertifyService:AlertifyService,private categoryService:CategoryService,private authService:AuthService) {

   }
kitchenAddForm:FormGroup
categories:Category[]=[]
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    });
    this.createKitchenForm();
  }

  createKitchenForm(){
    this.kitchenAddForm=this.formBuilder.group({
      kitchenname:["",Validators.required],
      description:["",Validators.required],
      payType:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }

  addKitchen()
  {
    if(this.kitchenAddForm.valid)
    {
      this.kitchen=Object.assign({},this.kitchenAddForm.value)
      this.kitchen.userid=this.authService.getCurrentUserId();
      this.kitchenService.addKitchen(this.kitchen);
      this.kitchenService.addKitchenCategory(this.kitchenAddForm.get('categoryId').value)
      window.location.reload();
      
    }
  }

  alertInfo()
  {
    this.alertifyService.success("Yemek mutfağınıza başarıyla eklendi");
  }












}
