import { Component, Input } from '@angular/core';
import { ProductResponse } from 'src/app/models/ProductResponse';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input()
  product!: ProductResponse;
  
  tallas:string[]=["S","M","L","XL"];
}
