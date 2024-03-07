import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-producto',
  templateUrl: './pantalla-producto.component.html',
  styleUrls: ['./pantalla-producto.component.css']
})
export class PantallaProductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  mostrarFecha = false;
  mostrarBotonReservar = false;
  fechaInicio: string = ''; // Inicializa fechaInicio
  fechaFin: string = '';
  mostrarCampoFecha() {
    this.mostrarFecha = true;
  }

  validarFechas() {
    if (this.fechaInicio > this.fechaFin) {
      alert('La fecha de final no puede ser anterior a la fecha de inicio.');
      this.fechaFin = this.fechaInicio;
    } else {
      this.mostrarBotonReservar = true;
    }
  }
}