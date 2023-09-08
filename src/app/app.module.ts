import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myroutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookcomponentComponent } from './addbookcomponent/addbookcomponent.component';
import { BookServiceService } from './book-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundpageComponent } from './not-foundpage/not-foundpage.component';
import { FooterComponent } from './footer/footer.component';
import { BuyersPageComponent } from './buyers-page/buyers-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AddbookcomponentComponent,
    myroutes,
    NotFoundpageComponent,
    FooterComponent,
    BuyersPageComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
