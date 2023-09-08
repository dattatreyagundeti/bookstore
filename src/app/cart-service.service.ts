import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  url = "http://localhost:4600/cart";
  deleteurl = "http://localhost:4600/deletecartItem/"
  postUrl = "http://localhost:4600/addcartItem"

  constructor(private http:HttpClient) { }

  fetchcartItems(){
   return this.http.get(this.url)
  }
  deleteitems(id: string){
    return this.http.delete(this.deleteurl + id)
  }
  postBook(body: any){
    return this.http.post(this.postUrl, body)
  }

}
