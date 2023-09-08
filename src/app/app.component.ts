import { Component } from '@angular/core';
import { CartServiceService } from './cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user :any;
  profilepic:any;
  Usernname:any;
  isuserther=false;
  title = "welcome"
  public cartItems:{title:string ,author :string, img_url:string,category:string,price:string,_id:string}[]=[]
  count:any;
  constructor(private _myCartService : CartServiceService,private myroute:Router ){}
  ngOnInit(): void {
    setInterval(()=>{
      this.gettingUserdetails()
    },100)
    this.getCartItems();
    


    
  }
  gettingUserdetails(){
    this.user = JSON.parse(sessionStorage.getItem('loginUser')||'{}');
    this.profilepic = this.user.image;
    this.Usernname = this.user.Name;
    if(this.profilepic){
      this.isuserther = true;
    } 
  }
  getCartItems() {
    this._myCartService.fetchcartItems().subscribe((data:any) =>{ 
      this.cartItems = data;
      this.count = this.cartItems.length;
    }
    )
  }

  logout(){

    sessionStorage.removeItem('loginUser')
    this.myroute.navigate(['login']);
    this.isuserther = false;

  }


}
