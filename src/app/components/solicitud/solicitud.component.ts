import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent {
  model = { idPropiedad: null, nombreSolicitante: null, emailSolicitante: null, telefonoSolicitante: null, mensaje: null, estado: null, fechaSolicitud: null };

  onSubmit() {
    console.log(this.model);
  }
}
