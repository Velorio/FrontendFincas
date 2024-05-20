import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/autenticacion.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css'],
  providers: [FormsModule, HttpClientModule]  // Add HttpClientModule to providers
})
export class InicioDeSesionComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async iniciarSesion(): Promise<void> {
    try {
      await this.authService.login(this.correo, this.contrasena).toPromise();
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  }
}

@NgModule({
  declarations: [InicioDeSesionComponent],
  imports: [FormsModule, HttpClientModule],
  exports: [InicioDeSesionComponent]
})
export class InicioDeSesionModule { }
