import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertifyService } from './alertify.service';
import { Observable, throwError, empty, EMPTY, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { Kitchen } from '../models/Kitchen';
import { KitchenCategory } from '../models/KitchenCategory';


@Injectable({
  providedIn: 'root'
})
export class KitchenService {

constructor(private httClient:HttpClient,private alertifyService:AlertifyService) { }

path ="https://localhost:44357/api/kitchen";

kitchen:number;
kitchenCategory:KitchenCategory;
addKitchen(kitchen){
   this.httClient.post(this.path,kitchen).subscribe(data=>{
    this.alertifyService.success("Mutfağınız başarıyla oluşturuldu.");  
    this.kitchen=data['id']
  });
}


addKitchenCategory(data){
  this.kitchenCategory=Object.assign({})
  this.kitchenCategory.kitchenId=this.kitchen
  this.kitchenCategory.categoryId=data;
  this.httClient.post("https://localhost:44357/api/category/kitchenCategory",this.kitchenCategory).subscribe(data=>{})
}
getKitchenByUser(userId){
  return this.httClient.get(this.path+'/user/'+userId)
}

getKitchens(): Observable<Kitchen[]> {

  return this.httClient.get<Kitchen[]>(this.path).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

handleError(err: HttpErrorResponse) {
  let errorMessage = ""
  if (err.error instanceof ErrorEvent) {
    errorMessage = 'Bir hata meydana geldi ' + err.error.message
  }
  else {
    errorMessage = 'Sistemsel bir hata'
  }

  return throwError(errorMessage);
}












}

