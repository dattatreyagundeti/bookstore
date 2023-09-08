import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RuserserviceService {

  _url = 'http://localhost:4600/addUser';
  public url = 'http://localhost:4600/user';
  public updateUser = 'http://localhost:4600/update';
  public deletUrl = 'http://localhost:4600/deleting/';
  constructor(private _http:HttpClient) { }
  // Using Post
  enroll(user:any) {
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler (error:HttpErrorResponse){
    return throwError(error);
  }
//  Get method
  getUser():Observable<any>{
      return this._http.get<any>(this.url)
  } 
// Put method
  updateuser(id:any ,body:any):Observable<any>{

      return this._http.put<any>(`http://localhost:4600/update/${id}`,body )
  }
  // deleting method
  deleteUser(id:string):Observable<any>{
    return this._http.delete<any>(this.deletUrl + id )
  }

}
