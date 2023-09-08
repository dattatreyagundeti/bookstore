import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems:{title:string ,author :string, img_url:string,category:string,price:string,_id:string}[]=[];
  public buyingItems:{title:string ,author :string, img_url:string,category:string,price:string,_id:string}[]=[]
   public showbuyitems = false;
  constructor(private _myCartService : CartServiceService){}
  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    this._myCartService.fetchcartItems().subscribe((data:any) => this.cartItems = data);
  }
  removeItem(id:any){
    this._myCartService.deleteitems(id).subscribe((res) => {
      this.getCartItems();
    });
  }
  buyItems(p:any){
    this.buyingItems.push(p);
    console.log(this.buyingItems);
    this.showbuyitems = true;
  }
}
