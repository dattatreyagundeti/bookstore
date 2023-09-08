import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddbookcomponentComponent } from './addbookcomponent/addbookcomponent.component';
import { ShowBooksComponent } from './show-books/show-books.component';
import { HomeComponent } from './home/home.component';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { CartComponent } from './cart/cart.component';
import { BuyersPageComponent } from './buyers-page/buyers-page.component';

const routes: Routes = [
  {path : '' , redirectTo: '/login',pathMatch:'full'},
  {path : 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'addbook', component:AddbookcomponentComponent},
  {path: 'showbooks', component:ShowBooksComponent},
  {path:'cart', component:CartComponent},
  {path:'buypage/:id', component:BuyersPageComponent},
  {path: '**', component:NotFoundpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const myroutes = [
  CartComponent, LoginComponent,AddbookcomponentComponent,ShowBooksComponent,RegisterComponent,HomeComponent
]