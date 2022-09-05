import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../interfaz/producto';
import { timeout } from 'rxjs';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css']
})

export class MenuInicialComponent implements OnInit {

  productos: Producto[] = [];
  categorias: string[] = [];
  selectedCat: string = 'Todos';
  selectedFilt: string = 'Popularidad'
  nombre: string = ''
  productoSelec: any;
  constructor(private productoService: ProductoService, private router:Router) {
    
  }
  ngOnInit(): void {

    this.productoService.productoActual.subscribe(np=>{
      this.productoSelec = np;
    })
    
    this.inicializarProductos();
  }

  inicializarProductos() {
    let cat: string = this.selectedCat;
    let filt: string = this.selectedFilt;
    if (this.nombre === '') {
      if (cat === 'Todos' && filt == 'Popularidad') {
        this.productoService.obtenerProductos().subscribe(respuesta => {
          this.productos = respuesta as Producto[];
          this.inicializarCategorias(this.productos);
        })
      } else if (cat == 'Todos' && filt == 'Precio mayor') {
        this.productoService.obtenerProductosPrecioMayor().subscribe(respuesta => {
          this.productos = respuesta as Producto[];
          this.inicializarCategorias(this.productos);
        })
      } else if (cat == 'Todos' && filt == 'Precio menor') {
        this.productoService.obtenerProductosPrecioMenor().subscribe(respuesta => {
          this.productos = respuesta as Producto[];
          this.inicializarCategorias(this.productos);
        })
      } else if (cat != 'Todos' && filt == 'Popularidad') {
        this.productoService.obtenerProductosCategoriaPop(cat).subscribe(respuesta => {
          this.productos = respuesta as Producto[];
          this.inicializarCategorias(this.productos);
        })
      } else if (cat != 'Todos' && filt == 'Precio mayor') {
        this.productoService.obtenerProductosCategoriaPMayor(cat).subscribe(respuesta => {
          this.productos = respuesta as Producto[];
          this.inicializarCategorias(this.productos);
        })
      } else if (cat != 'Todos' && filt == 'Precio menor') {
        this.productoService.obtenerProductosCategoriaPMenor(cat).subscribe(respuesta => {
          this.productos = respuesta as Producto[];
          this.inicializarCategorias(this.productos);
        })
      }
    } else {
      this.productoService.obtenerProductosPorNombre(this.nombre).subscribe(respuesta => {
        this.productos = respuesta as Producto[];
        this.inicializarCategorias(this.productos);
      })
    }
  }
  inicializarCategorias(prods: Producto[]) {
    for (let producto of prods) {
      let categoria = producto.category;
      if (!this.categorias.includes(categoria)) {
        this.categorias.push(categoria)
      }
    }
  }
  filtrarCategorias(categ: string) {
    this.nombre = '';
    this.selectedCat = categ;
    this.ngOnInit();
  }
  filtros(filt: string) {
    this.nombre = '';
    this.selectedFilt = filt;
    this.ngOnInit()
  }

  busqueda(nombre: string) {
    this.nombre = nombre
    this.ngOnInit()
  }

  visualizar(nombreProd: string){

    this.router.navigate(['detalle-producto'])

  }

}
