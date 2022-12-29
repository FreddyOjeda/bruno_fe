import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ProductsComponent } from './components/products/products.component';
import { CompanyComponent } from './components/company/company.component';
import { TrolleyComponent } from './components/trolley/trolley.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductTrolleyComponent } from './components/product-trolley/product-trolley.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashBoardComponent,
    ProductsComponent,
    CompanyComponent,
    TrolleyComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    ProductTrolleyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
