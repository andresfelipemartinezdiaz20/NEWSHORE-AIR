import { Component, OnInit } from '@angular/core';
import { Vuelos } from '../vuelos/vuelos.service';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  providers: [Vuelos]
})


export class ListadoComponent implements OnInit {

  vuelos: any = {};

  constructor(private service: Vuelos) { 
    
  }

  filterPost = '';
  filterdestination = '';

  ngOnInit(): void {
    this.service.getAllVuelos().subscribe( vuelos =>{
      this.vuelos = vuelos;
      console.log(this.vuelos)
    })
   
  }

}
