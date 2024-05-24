import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito-compras',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.css'
})
export class CarritoComprasComponent {
  servicios = inject(CarritoService)
  service = inject(ProductosService)

  constructor (private router:Router ){}

  productos: any
  nombre: any;
  precio: any;
  categoria: any;

  ngOnInit(){
    this.service.getProductos().subscribe(p=>{
      this.productos = p
    })
  }

  agregar(carrito:any){
    this.servicios.agregar(carrito)
    this.servicios.postCarrito(carrito).subscribe()
    this.router.navigate(['/factura'])
  }
}


