import { Routes } from '@angular/router';
import { CrearPropiedadComponent } from './components/crear-propiedad/crear-propiedad.component';
import { ListarPropiedadesComponent } from './components/listar-propiedades/listar-propiedades.component';

export const routes: Routes = [
    { path: 'pruebaPost', component: CrearPropiedadComponent},
    { path: 'pruebaGet', component: ListarPropiedadesComponent}
];
