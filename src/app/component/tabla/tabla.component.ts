import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
servicios = inject(ProductosService)
productos: any
ngOnInit(){
  this.servicios.getProductos().subscribe(p=>{
    this.productos = p
  })
}
eliminar(id: any){
  var resultado = window.confirm('Estas seguro?');
  if (resultado === true) {
    this.servicios.deleteProductoID(id).subscribe()
    window.location.reload()
  } else { 
    window.alert('Ningun dato se eliminara');
  }
  }
}
