import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/models/product.model';

@Component({
  selector: 'adi-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    id: 1,
    name: 'Dame 5',
    price: 80,
    description: 'Made to play fresh out of the box, these low top basketball shoes are designed with Damian Liliard\'s signature style. Built with a textile upper, they feature flexible cushioning for lightweight comfort n every step-back jumper. The herringbone outsole lets you change directions on a dime.',
    media: {
      featuredImage: 'assets/images/full/dame5.png',
      iconImage: 'assets/images/3.png'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
