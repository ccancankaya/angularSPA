import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { AlertifyService } from '../services/alertify.service'
import { FoodService } from '../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  providers:[FoodService]
})
export class FoodsComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,private foodService:FoodService,
    private activatedRoute:ActivatedRoute) { }

    filterText = ""
    numberOfFood = 0
    foods: Food[];
    public pageNumber: number = 1;
    public Count: number;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.foodService.getFoods(params["categoryId"]).subscribe(data=>{
         this.foods=data;
        this.pageNumber=1;
        this.Count=data.length;
      });
    })
  }

  public onPageChange=(pageNumber)=>{
    this.activatedRoute.params.subscribe(params=>{
      this.foodService.getFoods(params["categoryId"]).subscribe(data=>{
         this.foods=data;
        this.pageNumber=pageNumber;
        this.Count=data.length;
      });
    })
  }

  addToCart(food) {

    this.alertifyService.success(food.name + " sepete eklendi")
  }
}


