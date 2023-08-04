import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  img = '../assets/pngs/download.png';
  alt = 'logo';
  item1 = 'Home';
  item2 = 'About us';
  item3 = 'Contact us';
  item4 = 'Login';

}
