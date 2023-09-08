import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RuserserviceService } from '../ruserservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userrrs:{}[] = [];
  userName:string='';
  isvalid:boolean=false;
  constructor(private myroute:Router ,private _myser: RuserserviceService){}

  goto(){
    this.myroute.navigate(['register']);
  }

  checking() {
    this._myser.getUser().subscribe(user => {
      this.userrrs = user;
      
      const loggedInUser = this.userrrs.find((user: any) => this.userName === user.email);
      
      if (loggedInUser) {
        sessionStorage.setItem('loginUser', JSON.stringify(loggedInUser));
        this.myroute.navigate(['showbooks']);
      } else {
        this.isvalid = true;
        setTimeout(() => {
          this.isvalid = false;
        }, 1000);
      }
    });
  }
  

}
