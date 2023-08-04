import { Component } from '@angular/core';
import { BookserviceService } from '../services/bookservice.service';
import { Book } from '../model/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  book!:Book[];
  constructor(private service:BookserviceService, private router:Router ){}

  ngOnInit():void{
    this.service.getallbook().subscribe(data => this.book=data);
  }

  onclick(){
    this.router.navigateByUrl('new');
  }
}
