import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { ConfirmarProductoComponent } from './confirmar-producto/confirmar-producto.component';
import { PantallaPagoComponent } from './pantalla-pago/pantalla-pago.component';
import { PantallaProductoComponent } from './pantalla-producto/pantalla-producto.component';
import { PantallaReservasComponent } from './pantalla-reservas/pantalla-reservas.component';
import { PantallaUsuariComponent } from './pantalla-usuari/pantalla-usuari.component';


const routes: Routes = [

  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'pantalla-principal', 
    component: PantallaPrincipalComponent 
  },
  { 
    path: 'confirmar-producto', 
    component: ConfirmarProductoComponent 
  },
  { 
    path: 'pantalla-pago', 
    component: PantallaPagoComponent 
  },
  { 
    path: 'pantalla-producto', 
    component: PantallaProductoComponent 
  },
  { 
    path: 'pantalla-reservas', 
    component: PantallaReservasComponent 
  },
  { 
    path: 'pantalla-usuari', 
    component: PantallaUsuariComponent 
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
