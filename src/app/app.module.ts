import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AtractivosComponent } from './paginas/atractivos/atractivos.component';
import { EventosComponent } from './paginas/eventos/eventos.component';
import { HospedajeComponent } from './paginas/hospedaje/hospedaje.component';
import { RestaurantesComponent } from './paginas/restaurantes/restaurantes.component';
import { RutasComponent } from './paginas/rutas/rutas.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    InicioComponent,
    AtractivosComponent,
    EventosComponent,
    HospedajeComponent,
    RestaurantesComponent,
    RutasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }