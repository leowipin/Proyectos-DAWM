import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) {

   }
  obtenerProductos(){
    return this.http.get('http://localhost:3000/todos/popularidad');
  }
  obtenerProductosPrecioMayor(){
    return this.http.get('http://127.0.0.1:3000/todos/precio-mayor');
  }
  obtenerProductosPrecioMenor(){
    return this.http.get('http://127.0.0.1:3000/todos/precio-menor');
  }
  obtenerProductosCategoriaPop(cat:string){
    return this.http.get('http://127.0.0.1:3000/'+cat+'/popularidad');
  }
  obtenerProductosCategoriaPMayor(cat:string){
    return this.http.get('http://127.0.0.1:3000/'+cat+'/precio-mayor');
  }
  obtenerProductosCategoriaPMenor(cat:string){
    return this.http.get('http://127.0.0.1:3000/'+cat+'/precio-menor');
  }
}
