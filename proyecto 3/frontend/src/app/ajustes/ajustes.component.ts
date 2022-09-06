import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  productSelect: string;
  recepcion: string;
  pago: string;
  comentario: string='';
  precio: string;
  id: string;

  constructor(private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productSelect = this.activateRoute.snapshot.params['nombre']
    this.precio = this.activateRoute.snapshot.params['precio']
    this.id = this.activateRoute.snapshot.params['id']
  }

  metodoRecepcion(valorRecepcion: string){
    this.recepcion = valorRecepcion;
  }

  metodoPago(valorPago: string){
    this.pago = valorPago
  }

  inputComentario(comentario:string){
    this.comentario = comentario
    console.log(this.comentario)
  }

}
