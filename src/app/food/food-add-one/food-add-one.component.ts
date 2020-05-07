import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import {NgForm} from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-food-add-one',
  templateUrl: './food-add-one.component.html',
  styleUrls: ['./food-add-one.component.css'],
  providers: [CategoryService,FoodService]
})
export class FoodAddOneComponent implements OnInit {

  constructor(private categoryService: CategoryService,private foodService:FoodService,private alertifyService:AlertifyService) { }

  model: Food = new Food();
  categories: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }

  add(form:NgForm){
    this.foodService.addFood(this.model).subscribe(data=>{
      this.alertifyService.success(data.name + " başarıyla eklendi.")
    });
  }

}
