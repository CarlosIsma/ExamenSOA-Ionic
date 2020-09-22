import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Libreria } from './Libreria';

@Injectable({
  providedIn: 'root'
})
export class ConsumolibreriaService {

  URL = "https://heroku-aos.herokuapp.com/api/libreria";

  constructor(private httpc: HttpClient) {}
    getLibreria(): Observable<Libreria> {
      return this.httpc.get<Libreria>(this.URL); 
    
   }
}
