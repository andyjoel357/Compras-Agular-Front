import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.css'
})
export class NuevoProductoComponent {
id: any
nombre: any;
precio: any;
categoria: any;

servicio =inject(ProductosService)
async guardar(datos: NgForm){

  this.servicio.postNosotros(datos.value).subscribe()
  window.location.reload()
  window.location.href="productos"
  }
  
}
