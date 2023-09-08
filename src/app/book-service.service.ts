import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  url = "http://localhost:4600/book";
  deleteurl = "http://localhost:4600/deletingBook/"
  updateurl = "http://localhost:4600"
  postUrl = "http://localhost:4600/addBook"

  constructor(private http:HttpClient) { }

  fetchBooks(){
   return this.http.get(this.url)
  }
  deleteBook(id: string){
    return this.http.delete(this.deleteurl + id)
  }
  postBook(body: any){
    return this.http.post(this.postUrl, body)
  }
  putBook(body: any){
    const {id} = body
    return this.http.put(`${this.updateurl}/updatebook/${id}` , body)
  }
}
