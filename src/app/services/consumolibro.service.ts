import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Libro } from './Libro';

@Injectable({
  providedIn: 'root'
})
export class ConsumolibroService {

  URL = "https://heroku-aos.herokuapp.com/api/libro";

  constructor(private httpc: HttpClient) {}
    getLibro(): Observable<Libro> {
      return this.httpc.get<Libro>(this.URL); 
    
   }
}
