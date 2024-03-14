import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-producto',
  templateUrl: './confirmar-producto.component.html',
  styleUrls: ['./confirmar-producto.component.css']
})
export class ConfirmarProductoComponent implements OnInit {

  nombre: string = '';
  direccion: string = '';
  precio: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Leer los parámetros pasados desde la pantalla de reserva
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.direccion = params['direccion'];
      this.precio = params['precio'];
      this.fechaInicio = params['fechaInicio'];
      this.fechaFin = params['fechaFin'];
    });
  }

}
