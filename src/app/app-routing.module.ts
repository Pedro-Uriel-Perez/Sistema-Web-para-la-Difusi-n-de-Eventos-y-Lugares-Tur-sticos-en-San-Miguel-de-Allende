
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './paginas/inicio/inicio.component';
import { AtractivosComponent } from './paginas/atractivos/atractivos.component';
import { EventosComponent } from './paginas/eventos/eventos.component';
import { HospedajeComponent } from './paginas/hospedaje/hospedaje.component';
import { RestaurantesComponent } from './paginas/restaurantes/restaurantes.component';
import { RutasComponent } from './paginas/rutas/rutas.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'atractivos', component: AtractivosComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'hospedaje', component: HospedajeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
