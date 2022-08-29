import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes=[
  {path:'', component:MenuInicialComponent},
  {path:'detalle-producto', component:DetalleProductoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuInicialComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
