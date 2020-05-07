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

  addFood(food:Food):Observable<Food>
  {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Food>(this.path,food,httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
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
    return this.http.get<Photo[]>(this.path+"/photos/?foodId="+id);
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


