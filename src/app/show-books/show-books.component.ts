import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { LowerCasePipe } from '@angular/common';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {
  public allBooks:{title:string ,author :string, img_url:string,category:string,price:string,_id:string}[]=[]
  public filterBooks: { title: string, author: string, img_url: string, category: string,_id:string, price: string }[] = [];
  public searchInput:string='';

  constructor(private myser:BookServiceService,private mycartSer:CartServiceService ,private router:Router){}
  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.myser.fetchBooks().subscribe((data:any) =>{ this.allBooks= data});
  }
  gotoCart(i:any){
    interface Body {
      title: string | null;
      author: string | null;
      img_url: string | null;
      price : string | null;
      category: string | null;
      id: string | null;
    }

    let body: Body = {
      title: i.title,
      author: i.author,
      img_url: i.img_url,
      price : i.price,
      category: i.category,
      id: null 
    };
    this.mycartSer.postBook(body).subscribe((res)=>{
    },(err)=>{console.log("post")});
    

  }
  renderBooks(){
     this.filterBooks = this.allBooks.filter((book:any) => (book.category.toLowerCase()).includes( this.searchInput))
     if (this.filterBooks.length > 0 ){
      return this.filterBooks
     }else{
      return this.allBooks
     }
  }
  clearSearch() {
    this.searchInput='';
  }  
  gotoBuypage(id:any){
    
    this.router.navigate(['buypage/',id]);
  }
}
