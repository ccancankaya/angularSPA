import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Food } from '../models/food';
import { Category } from '../models/category';

@Component({
  selector: 'app-kitchen-food',
  templateUrl: './kitchen-food.component.html',
  styleUrls: ['./kitchen-food.component.css'],
  providers:[FoodService,AuthService,CategoryService]
})
export class KitchenFoodComponent implements OnInit {

  constructor(private foodService:FoodService,private authService:AuthService,private alertifyService:AlertifyService,private categoryService:CategoryService,private formBuilder:FormBuilder) { }

  currentKitchenId:any
  food:Food;
  foodAddForm:FormGroup
  categories:Category[]

  createFoodForm(){
    this.foodAddForm=this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    });
    this.authService.getCurrentKitchenId().subscribe(data=>{
      this.currentKitchenId=data;
    });
    this.createFoodForm();
    
  }

  addFood()
  {
    if(this.foodAddForm.valid)
    {
      this.food=Object.assign({},this.foodAddForm.value)
      this.food.kitchenId=this.currentKitchenId;
      this.food.categoryId=this.foodAddForm.get('categoryId').value;
      this.foodService.addFood(this.food);
      this.alertifyService.success("Yemek başarıyla eklendi");
    }
  }

}
