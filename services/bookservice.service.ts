import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  baseurl = 'assets/book.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getallbook():Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseurl}`);
  }
}