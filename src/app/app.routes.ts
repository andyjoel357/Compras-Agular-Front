import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductoServiciosComponent } from './pages/producto-servicios/producto-servicios.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { EditarTablaComponent } from './pages/editar-tabla/editar-tabla.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { LoginComponent } from './pages/login/login.component';
import { adminGuard, userGuard } from './guard/tienda.guard';
import { FacturaComponent } from './pages/factura/factura.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'productos', component: ProductoServiciosComponent, canActivate:[adminGuard]},
    {path:'inventario', component:CarritoComprasComponent, canMatch:[userGuard] },
    {path:'contactanos', component:ContactosComponent},
    {path:'factura', component:FacturaComponent},
    {path:'NuevoProducto', component:NuevoProductoComponent, canActivate:[adminGuard]},
    {path:'detalles/:idDetalles', component:DetallesComponent, canMatch:[userGuard]},
    {path:'editar/:idNosotros', component:EditarTablaComponent, canActivate:[adminGuard]},

    {path:'**',component: Error404Component},

]
;

