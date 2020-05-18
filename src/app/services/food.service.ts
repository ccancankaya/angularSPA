import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Food } from '../models/food';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { Photo } from '../models/photo';

@Injectable()
export class FoodService {

  constructor(private http: HttpClient) { }

  path = "https://localhost:44357/api/food";
  foodId:number

  addFood(food)
  {
    this.http.post(this.path,food).subscribe(data=>{
      this.foodId=Object.values(data)[0]
    });
  }
  latestFoodId(){
    return this.http.get(this.path+'/latest')
  }
  get currentFoodId(){
    return this.foodId
  }
  getFoods(categoryId): Observable<Food[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath = newPath  +"/category/"+ categoryId;
    }
    return this.http.get<Food[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getFood(id):Observable<Food>{
    let newPath=this.path;
    if(id){
      newPath=newPath+"/"+id;
    }
    return this.http.get<Food>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
    
  }

  getPhotosByFood(id):Observable<Photo[]>{
    if(id)
    {
      console.log("hata")
    }
    return this.http.get<Photo[]>(this.path+"/photos/?id="+id);
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


