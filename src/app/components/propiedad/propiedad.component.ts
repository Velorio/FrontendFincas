import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})
export class PropiedadComponent {
  model = { titulo: null, direccion: null, precio: null, descripcion: null, caracteristicas: null, metrosCuadrados: null, tipoPropiedad: null, enVenta: null };

  onSubmit() {
    console.log(this.model);
  }
}
