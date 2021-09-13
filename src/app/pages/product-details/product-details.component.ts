import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/models/product.model';
import { FOOTER_NAVLINKS } from './config/footer-navlinks';
import { PRODUCT } from './config/sample-data';
@Component({
  selector: 'adi-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = PRODUCT;
  footerLinks = FOOTER_NAVLINKS;
  selectedImage: string = 'assets/images/full/dame5.png';

  constructor() { }

  ngOnInit(): void {
  }

}
