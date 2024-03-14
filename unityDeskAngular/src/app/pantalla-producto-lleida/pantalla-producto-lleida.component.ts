import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-producto-lleida',
  templateUrl: './pantalla-producto-lleida.component.html',
  styleUrls: ['./pantalla-producto-lleida.component.css']
})
export class PantallaProductoLleidaComponent implements OnInit {

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
      this.mostrarBotonReservar = false; // Oculta el botón si la fecha final es anterior a la inicial
    } else {
      this.mostrarBotonReservar = true;
    }
  }
}