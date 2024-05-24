import { Component } from '@angular/core';
import { TablaComponent } from '../../component/tabla/tabla.component';
import { NuevoProductoComponent } from '../nuevo-producto/nuevo-producto.component';

@Component({
  selector: 'app-producto-servicios',
  standalone: true,
  imports: [TablaComponent, NuevoProductoComponent],
  templateUrl: './producto-servicios.component.html',
  styleUrl: './producto-servicios.component.css'
})
export class ProductoServiciosComponent {

}
