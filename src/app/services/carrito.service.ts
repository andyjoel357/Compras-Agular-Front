import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private constructor(private http :HttpClient) { }
API_CARRITO='http://localhost:3000/carrito'
  producto: any []=[];

  agregar(carrito:any){
   return this.producto.push(carrito);
  }
  obtener(){
    return this.http.get(this.API_CARRITO)
  }

  borrar(id:string){
    return this.http.delete(`${this.API_CARRITO}/${id}`)
  }
  postCarrito(carrito: any):Observable<any>{
    return this.http.post(this.API_CARRITO, carrito)
  }
}
