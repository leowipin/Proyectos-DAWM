import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../interfaz/producto';
@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css']
})
export class MenuInicialComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService:ProductoService) {
   }
  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.productos = respuesta as Producto[];
    })
  }

}
