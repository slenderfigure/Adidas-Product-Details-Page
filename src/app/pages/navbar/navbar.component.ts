import { Component, OnInit } from '@angular/core';
import { NAVLINKS } from './config/navlinks';

@Component({
  selector: 'adi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mainLogo: string = 'assets/images/svg/adidas-logo.svg';
  navLinks = NAVLINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
