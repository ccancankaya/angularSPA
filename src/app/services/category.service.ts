import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Category } from '../models/category';
import {tap,catchError} from 'rxjs/operators'

@Injectable()
export class CategoryService {

constructor(private httpClient:HttpClient) { }

path=" https://localhost:44357/api/category"
getCategories():Observable<Category[]>
{
  return this.httpClient.get<Category[]>(this.path).pipe(
    tap(data=>{}),
      catchError(this.handleError)
  )
}

handleError(err: HttpErrorResponse) {
  let errorMessage=""
  if (err.error instanceof ErrorEvent) {
    errorMessage='Bir hata meydana geldi '+err.error.message
  }
  else
  {
    errorMessage='Sistemsel bir hata'
  }

  return throwError(errorMessage);
}
}
