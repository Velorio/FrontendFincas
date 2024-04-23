import { Component } from '@angular/core';

@Component({
  selector: 'app-calificacionPropiedad',
  templateUrl: './calificacionPropiedad.component.html',
  styleUrls: ['./calificacionPropiedad.component.css']
})
export class CalificacionpropiedadComponent {
  model = { puntuacion: null, comentario: null, idPropiedad: null, idUsuario: null };

  onSubmit() {
    console.log(this.model);
  }
}
