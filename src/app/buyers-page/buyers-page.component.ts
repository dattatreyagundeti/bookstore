import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-buyers-page',
  templateUrl: './buyers-page.component.html',
  styleUrls: ['./buyers-page.component.css']
})
export class BuyersPageComponent implements OnInit {
  buyItemsArray:{title:string ,author :string, img_url:string,category:string,price:string}[]=[];
  buyId:any;
  constructor(private rout:ActivatedRoute , private bookService :BookServiceService){}
  ngOnInit(): void {
    this.rout.params.subscribe((data)=>this.buyId = data)
    this.bookService.fetchBooks().subscribe((books:any)=>{
     this.buyItemsArray = books.filter((a:any)=>a._id === this.buyId.id)
    console.log(this.buyItemsArray);
  })

  }
  alerth(){
    alert("your order placed successfully")
  }



}
