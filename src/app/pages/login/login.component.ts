import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio = inject(LoginService)
  route = inject(Router)
  password: any;
  email: any;
  token: any;
  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken
      if (this.token != 'true' && p.user.role =='usuario') {
        localStorage.setItem("token", 'true')
        window.location.href=('carrito')
      }   else if (this.token != 'true' && p.user.role == 'administrador'){
        localStorage.setItem("admin", 'true')
        window.location.href=('productos')
      }
    })
  }
}
