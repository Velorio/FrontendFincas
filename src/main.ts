import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { AuthService } from './app/services/autenticacion.service';
import { authGuard } from './app/auth.guard';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(),
    AuthService,
    { provide: 'authGuard', useValue: authGuard }
  ]
})
  .then(() => {
    console.log('Aplicación iniciada');
  })
  .catch(error => {
    console.error('Error al iniciar la aplicación', error);
  });
