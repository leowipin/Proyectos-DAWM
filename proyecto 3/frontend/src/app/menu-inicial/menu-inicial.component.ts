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
  selectedCat: string = 'Todos';
  selectedFilt: string = 'Popularidad'
  constructor(private productoService: ProductoService) {
  }
  ngOnInit(): void {
    this.inicializarProductos();
  }

  inicializarProductos() {
    let cat: string = this.selectedCat;
    let filt: string = this.selectedFilt;
    if (cat === 'Todos' && filt == 'Popularidad' ) {
      this.productoService.obtenerProductos().subscribe(respuesta => {
        this.productos = respuesta as Producto[];
        this.inicializarCategorias(this.productos);
      })
    } else if(cat=='Todos' && filt == 'Precio mayor'){
      this.productoService.obtenerProductosPrecioMayor().subscribe(respuesta => {
        this.productos = respuesta as Producto[];
        this.inicializarCategorias(this.productos);
      })
    } else if(cat=='Todos' && filt == 'Precio menor'){
      this.productoService.obtenerProductosPrecioMenor().subscribe(respuesta => {
        this.productos = respuesta as Producto[];
        this.inicializarCategorias(this.productos);
      })
    } else if(cat!='Todos' && filt == 'Popularidad'){
      this.productoService.obtenerProductosCategoriaPop(cat).subscribe(respuesta => {
        this.productos = respuesta as Producto[];
        console.log(cat+'popularidad')
        this.inicializarCategorias(this.productos);
      })
    } else if(cat!='Todos' && filt == 'Precio mayor'){
      this.productoService.obtenerProductosCategoriaPMayor(cat).subscribe(respuesta => {
        this.productos = respuesta as Producto[];
        this.inicializarCategorias(this.productos);
      })
    } else if(cat!='Todos' && filt == 'Precio menor'){
      this.productoService.obtenerProductosCategoriaPMenor(cat).subscribe(respuesta => {
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
    this.selectedCat = categ;
    this.ngOnInit();
  }
  filtros(filt: string){
    this.selectedFilt = filt;
    console.log('FILTRO ACT')
    this.ngOnInit()
  }

}
