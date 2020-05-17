import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Address } from '../models/address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

constructor(private httpclient:HttpClient) 
{ }

path = "https://localhost:44357/api/address";

addAddress(address){
  this.httpclient.post(this.path,address).subscribe();
}


getAddressByUser(userid):Observable<Address[]>{
  return this.httpclient.get<Address[]>(this.path+"/"+userid).pipe(
    tap(data=>{}),
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
