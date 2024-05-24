import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tabla',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-tabla.component.html',
  styleUrl: './editar-tabla.component.css'
})
export class EditarTablaComponent {
  id: any;
  nombre: any;
  precio: any;
  categoria: any;
  ruta=inject(Router)
  router=inject(ActivatedRoute)
  servicio = inject(ProductosService)

  ngOnInit() {
    this.router.params.subscribe(r =>{
      this.servicio.getNosotrosId(r['idNosotros']).subscribe(p =>{
        this.id = p.id,
        this.nombre=p.nombre,
        this.precio=p.precio,
        this.categoria=p.categoria
      })
    })
   
  }



  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()

    this.ruta.navigateByUrl("productos")
  }

}
