import { Component, OnInit } from '@angular/core';
import { ConsumolibreriaService } from '../services/consumolibreria.service';
import { Libreria } from '../services/Libreria';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  librerias: Libreria;
  constructor(private serviceGit : ConsumolibreriaService) {}

  ngOnInit(): void {
    this.obtenerLibrerias()
  }


  obtenerLibrerias(){
    this.serviceGit.getLibreria().subscribe(r=>{
      this.librerias=r;
    })
  }
}
