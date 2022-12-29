import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CompanyComponent } from './components/company/company.component';
import { TrolleyComponent } from './components/trolley/trolley.component';

const routes: Routes = [
  {path:'product-detail/:id', component: ProductDetailsComponent},
  {path:'dashboard', component: DashBoardComponent},
  {path:'list', component: ListProductsComponent},
  {path:'company', component: CompanyComponent},
  {path:'trolley', component: TrolleyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
