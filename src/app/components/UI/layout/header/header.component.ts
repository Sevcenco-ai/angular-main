import {Component, OnInit} from '@angular/core';
import {MenuItems} from "./heder.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  menuItems: MenuItems[] = [
    {
      icon: 'home',
      path: '/home',
      text: 'Home'
    },
    {
      icon: 'stay_current_portrait',
      path: '/phones_and_tablets',
      text: 'Phones'
    },
    {
      icon: 'laptop_mac',
      path: '/computers_and_laptops',
      text: 'Laptops'
    },
    {
      icon: 'gamepad',
      path: '/gaming',
      text: 'Gaming'
    },
    {
      icon: 'headset',
      path: '/audio',
      text: 'Audio'
    },
    {
      icon: 'watch',
      path: '/gadgets',
      text: 'Gadgets'
    }
  ]
  constructor() {
  }

  ngOnInit(): void {
  }
}
