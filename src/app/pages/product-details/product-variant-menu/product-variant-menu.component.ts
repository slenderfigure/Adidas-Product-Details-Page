import { Component, Input, OnInit } from '@angular/core';
import { ProductVariant } from 'src/app/common/models/product.model';

@Component({
  selector: 'adi-product-variant-menu',
  templateUrl: './product-variant-menu.component.html',
  styleUrls: ['./product-variant-menu.component.scss']
})
export class ProductVariantMenuComponent implements OnInit {
  @Input() productVariants: ProductVariant[] = [];
  @Input() activeVariant: string = '0003';

  constructor() { }

  ngOnInit(): void {
  }

}
