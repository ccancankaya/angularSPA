import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { AlertifyService } from '../services/alertify.service'
import { FoodService } from '../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Photo } from '../models/photo';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodService]
})
export class FoodComponent implements OnInit {


  constructor(private alertifyService: AlertifyService, private foodService: FoodService,
    private activatedRoute: ActivatedRoute
  ) { }

  food: Food;
  photos:Photo[]=[];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.foodService.getFood(params["id"]).subscribe(data => {
        this.food = data
      });
    })

  }

  getPhotosByFood(id)
  {
    this.foodService.getPhotosByFood(id).subscribe(data=>{
      this.photos=data;
      this.setGallery();
    })
  }

  getImages()
  {
    const imgUrls=[]
    for(let i=0;i<this.food.photos.length;i++)
    {
      imgUrls.push({
        small:this.food.photos[i].url,
        medium:this.food.photos[i].url,
        big:this.food.photos[i].url
      })
    }

    return imgUrls;
  }

  setGallery()
  {
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = this.getImages()
  }

  addToCart(food) {

    this.alertifyService.success(food.name + " sepete eklendi")
  }
}
