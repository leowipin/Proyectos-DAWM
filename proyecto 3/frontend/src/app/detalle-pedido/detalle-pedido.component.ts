import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Order } from '../interfaz/order';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  precio: string;//
  recepcion: string;
  pago: string;
  comentario: string;
  id: string;//
  nombreProd: string;//NOsql
  precioIva: number;//
  precioEnvio:number;//
  total: number//
  cantidad: number = 1//

  order: Order = {
    id:-1,
    cantidad:1,
    precio: -1,
    precioIva:-1,
    precioEnvio:-1,
    total:-1
  }
  

  constructor(private activateRoute: ActivatedRoute, private router: Router, private productoService:ProductoService) { }

  ngOnInit(): void {
   

    this.precio = this.activateRoute.snapshot.params['precio']
    this.recepcion = this.activateRoute.snapshot.params['recepcion']
    this.pago = this.activateRoute.snapshot.params['pago']
    this.comentario = this.activateRoute.snapshot.params['comentario']
    this.id = this.activateRoute.snapshot.params['id']
    this.nombreProd = this.activateRoute.snapshot.params['nombre']
    this.precioIva = Number(this.precio) * 0.12;
    this.metodoRecepcion();
    this.total = Number(this.precio) + this.precioIva + this.precioEnvio

    this.order.id = Number( this.activateRoute.snapshot.params['id'])
    this.order.precio = this.activateRoute.snapshot.params['precio']
    this.order.precioIva = this.precioIva
    this.order.precioEnvio = this.precioEnvio
    this.order.total = this.total
    
  }

  metodoRecepcion(){
    if(this.recepcion==='Retirar en local'){
      this.precioEnvio = 0;
    } else{
      this.precioEnvio = 2;
    }
  }

  enviarDatos(){
    this.productoService.addOrder(this.order).subscribe();

    
  }

}
