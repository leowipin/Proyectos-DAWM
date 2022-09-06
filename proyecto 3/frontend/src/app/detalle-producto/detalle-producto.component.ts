import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../interfaz/producto';
import { MenuInicialComponent } from '../menu-inicial/menu-inicial.component';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
   
  productSelect: string;
  precio: string;
  productos: Producto[];
  producto: Producto;
  id: string;

  constructor(private productoService:ProductoService, private router:Router, private activateRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.productSelect = this.activateRoute.snapshot.params['nombre']
    this.precio = this.activateRoute.snapshot.params['precio']
    this.inicializarProductos(this.productSelect)
    

  }
  inicializarProductos(product: string){
    this.productoService.obtenerProductosPorNombre(product).subscribe(respuesta => {
      this.productos = respuesta as Producto[];
      this.producto = this.productos[0];
    })
  }


}
