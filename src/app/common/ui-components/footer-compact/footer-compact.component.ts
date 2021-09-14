import { Component, OnInit } from '@angular/core';
import { FOOTER_NAVLINKS } from 'src/app/pages/product-details/config/footer-navlinks';

@Component({
  selector: 'adi-footer-compact',
  templateUrl: './footer-compact.component.html',
  styleUrls: ['./footer-compact.component.scss']
})
export class FooterCompactComponent implements OnInit {
  footerLinks = FOOTER_NAVLINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
