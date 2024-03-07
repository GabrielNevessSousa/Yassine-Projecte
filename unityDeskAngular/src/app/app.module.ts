import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { PantallaProductoComponent } from './pantalla-producto/pantalla-producto.component';
import { PantallaReservasComponent } from './pantalla-reservas/pantalla-reservas.component';
import { ConfirmarProductoComponent } from './confirmar-producto/confirmar-producto.component';
import { PantallaPagoComponent } from './pantalla-pago/pantalla-pago.component';
import { PantallaUsuariComponent } from './pantalla-usuari/pantalla-usuari.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PantallaPrincipalComponent,
    PantallaProductoComponent,
    PantallaReservasComponent,
    ConfirmarProductoComponent,
    PantallaPagoComponent,
    PantallaUsuariComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
