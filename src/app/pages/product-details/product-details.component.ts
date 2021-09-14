import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/models/product.model';
import { PRODUCT } from './config/sample-data';
@Component({
  selector: 'adi-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = PRODUCT;
  
  constructor() { }

  ngOnInit(): void {
  }

}
