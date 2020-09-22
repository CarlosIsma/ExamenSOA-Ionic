import { Component, OnInit } from '@angular/core';
import { ConsumolibroService } from '../services/consumolibro.service';
import { Libro } from '../services/Libro';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  libros: Libro;

  constructor(private serviceGit : ConsumolibroService) {}
  ngOnInit(): void {
    this.obtenerLibros()
  }


  obtenerLibros(){
    this.serviceGit.getLibro().subscribe(r=>{
      this.libros=r;
    })
  }
}
