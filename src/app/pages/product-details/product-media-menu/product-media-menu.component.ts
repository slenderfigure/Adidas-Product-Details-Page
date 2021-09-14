import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'adi-product-media-menu',
  templateUrl: './product-media-menu.component.html',
  styleUrls: ['./product-media-menu.component.scss']
})
export class ProductMediaMenuComponent implements OnInit {
  @Input() productImages: string[] = [];
  selectedImage: string = 'assets/images/full/dame5.png';

  constructor() { }

  ngOnInit(): void {
  }

}
