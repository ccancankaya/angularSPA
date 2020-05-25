import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../services/kitchen.service';
import { Kitchen } from '../models/Kitchen';

@Component({
  selector: 'app-kitchens',
  templateUrl: './kitchens.component.html',
  styleUrls: ['./kitchens.component.css'],
  providers:[KitchenService]
})
export class KitchensComponent implements OnInit {

  Kitchens:Kitchen[]
  public pageNumber: number = 1;
  public Count: number;
  constructor(private kitchenService:KitchenService) { }

  ngOnInit() {
    this.kitchenService.getKitchens().subscribe(data=>{
      this.Kitchens=data
      this.pageNumber=1;
      this.Count=data.length;
    })
  }


  public onPageChange=(pageNumber)=>{

      this.kitchenService.getKitchens().subscribe(data=>{
         this.Kitchens=data;
        this.pageNumber=pageNumber;
        this.Count=data.length;
      });
   
  }






}
