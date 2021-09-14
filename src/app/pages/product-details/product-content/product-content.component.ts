import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/models/product.model';

@Component({
  selector: 'adi-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent implements OnInit {
  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
