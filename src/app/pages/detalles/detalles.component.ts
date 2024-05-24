import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  servicios = inject(ProductosService)
  ruta = inject(ActivatedRoute)
  id:any
  producto:any
 
  ngOnInit(): void {
    this.ruta.params.subscribe(p =>{
      this.id = p['idDetalles'],
      console.log(p['idDetalles']);
      this.servicios.getProductosID(this.id).subscribe(producto=>{
        this.producto = producto
      });
    })
  
  }
    
  }