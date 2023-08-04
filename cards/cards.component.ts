import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor(private routes: Router) {

  }
  ngOnInit(){
    
  }
    Images = [
      {
        id:1,
        src:'../../assets/images/wired-headphones1.jpg',
        alt:'image1',
        title:'wired-headphones',
        button:'order now'
      },
      {
        id:2,
        src:'../../assets/images/wireless-buds1.jpg',
        alt:'image2',
        title:'bluetooth-buds',
        button:'order now'
      },
      {
        id:3,
        src:'../../assets/images/neckset.jpg',
        alt:'image3',
        title:'bluetooth-headphones',
        button:'order now'
      },
      {
        id:4,
        src:'../../assets/images/earphone2.jpg',
        alt:'image4',
        title:'Earphones',
        button:'order now'
      }
    ]
}
