import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from './servicios/producto.service';
import { AjustesComponent } from './ajustes/ajustes.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';
import { GraciasComponent } from './gracias/gracias.component';

const appRoutes:Routes=[
  {path:'', component:MenuInicialComponent},
  {path:'detalle-producto/:id/:nombre/:precio', component:DetalleProductoComponent},
  {path:'ajustes/:id/:nombre/:precio', component:AjustesComponent},
  {path:'detalle-pedido/:id/:nombre/:precio/:recepcion/:pago/:comentario', component:DetallePedidoComponent},
  {path:'gracias', component:GraciasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuInicialComponent,
    DetalleProductoComponent,
    AjustesComponent,
    DetallePedidoComponent,
    GraciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  exports:[RouterModule],
  providers: [ProductoService, MenuInicialComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
