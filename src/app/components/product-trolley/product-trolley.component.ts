import { Component, Input } from '@angular/core';
import { ProductResponse } from 'src/app/models/ProductResponse';

@Component({
  selector: 'app-product-trolley',
  templateUrl: './product-trolley.component.html',
  styleUrls: ['./product-trolley.component.css']
})
export class ProductTrolleyComponent {

  @Input()
  product!: ProductResponse;
}
