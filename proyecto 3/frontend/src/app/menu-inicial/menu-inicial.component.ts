import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../interfaz/producto';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css']
})
export class MenuInicialComponent implements OnInit {

  productos: Producto[] = [];
  categorias: string[] = [];

  constructor(private productoService: ProductoService) {
  }
  ngOnInit(): void {
    this.inicializarProductos();
  }
  inicializarProductos() {
    this.productoService.obtenerProductos().subscribe(respuesta => {
      this.productos = respuesta as Producto[];
      this.inicializarCategorias(this.productos);
    })

  }
  inicializarCategorias(prods: Producto[]) {
    for (let producto of prods) {
      let categoria = producto.category;
      if (!this.categorias.includes(categoria)) {
        this.categorias.push(categoria)
      }
    }
  }

}
