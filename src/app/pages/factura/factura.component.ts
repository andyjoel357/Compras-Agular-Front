import { Component, inject } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  servicios = inject(CarritoService)
  Acarrito : any=[]
  cantidad : any=[];
  subtotal: any;
  iva: any;
  total: any;
  ngOnInit(): void {
    this.Acarrito= this.servicios.obtener().subscribe(p=> {this.Acarrito=p});
  }

  eliminar(id: any){
    var resultado = window.confirm('Estas seguro?')
    if(resultado===true){
      this.Acarrito = this.servicios.borrar(id).subscribe()
    }else{
    }
 
  }

  calcular(index: number) {
    this.subtotal = this.Acarrito.reduce((sum: any, item:any, i:any) => 
      i !== index ? sum + item.precio * this.cantidad[i] : sum + item.precio * this.cantidad[i] * 0.88, 
    0);
  
    this.iva = this.subtotal * 0.12;
    this.total = this.subtotal + this.iva;
  
    [this.subtotal, this.iva, this.total] = [this.subtotal, this.iva, this.total].map(x => parseFloat(x.toFixed(2)));
  }
}
