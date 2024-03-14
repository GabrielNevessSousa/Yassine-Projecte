import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-producto',
  templateUrl: './pantalla-producto.component.html',
  styleUrls: ['./pantalla-producto.component.css']
})
export class PantallaProductoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  mostrarFecha = false;
  mostrarBotonReservar = false;
  fechaInicio: string = ''; // Inicializa fechaInicio
  fechaFin: string = '';
  nombreProducto: string = 'Oficina simple con luz natural'; // Asegúrate de definir el nombre del producto
  direccionProducto: string = 'Calle del Caballero de Gracia'; // Asegúrate de definir la dirección del producto
  precioProducto: string = '250€'; // Asegúrate de definir el precio del producto

  mostrarCampoFecha() {
    this.mostrarFecha = true;
  }

  reservar() {
    // Navega a la ruta de confirmación y pasa los datos como parámetros
    this.router.navigate(['/confirmar-producto'], {
      queryParams: {
        nombre: this.nombreProducto,
        direccion: this.direccionProducto,
        precio: this.precioProducto,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin
      }
    });
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
