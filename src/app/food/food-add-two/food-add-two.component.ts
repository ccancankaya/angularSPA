import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Food } from 'src/app/models/food';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { FoodService } from 'src/app/services/food.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-food-add-two',
  templateUrl: './food-add-two.component.html',
  styleUrls: ['./food-add-two.component.css'],
  providers: [CategoryService,FoodService]
})
export class FoodAddTwoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService,private foodService:FoodService,private alertifyService:AlertifyService) { }

  foodAddForm: FormGroup;
  food: Food = new Food();
  categories: Category[];
  createFoodAddForm() {
    this.foodAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.createFoodAddForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }

  add() {
    if (this.foodAddForm.valid) {
      this.food = Object.assign({}, this.foodAddForm.value)
    }
    this.foodService.addFood(this.food).subscribe(data=>{
      this.alertifyService.success(data.name + " başarıyla eklendi.")
    });

  }

}
