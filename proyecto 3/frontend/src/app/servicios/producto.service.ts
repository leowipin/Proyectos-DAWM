import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private nombreProducto = new BehaviorSubject('');
  productoActual = this.nombreProducto.asObservable();
  constructor(private http: HttpClient) {
  }
  obtenerProductos() {
    return this.http.get('http://localhost:3000/todos/popularidad');
  }
  obtenerProductosPorNombre(nombre: string) {
    return this.http.get('http://localhost:3000/' + nombre);
  }
  obtenerProductosPrecioMayor() {
    return this.http.get('http://127.0.0.1:3000/todos/precio-mayor');
  }
  obtenerProductosPrecioMenor() {
    return this.http.get('http://127.0.0.1:3000/todos/precio-menor');
  }
  obtenerProductosCategoriaPop(cat: string) {
    return this.http.get('http://127.0.0.1:3000/' + cat + '/popularidad');
  }
  obtenerProductosCategoriaPMayor(cat: string) {
    return this.http.get('http://127.0.0.1:3000/' + cat + '/precio-mayor');
  }
  obtenerProductosCategoriaPMenor(cat: string) {
    return this.http.get('http://127.0.0.1:3000/' + cat + '/precio-menor');
  }
  cambiarNombre(nombre: string){
    this.nombreProducto.next(nombre)
  }
}
