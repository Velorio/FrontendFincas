import { Component } from '@angular/core';

@Component({
  selector: 'app-arrendatario',
  templateUrl: './arrendatario.component.html',
  styleUrls: ['./arrendatario.component.css']
})
export class ArrendatarioComponent {
  model = { nombre: null, email: null, telefono: null, direccion: null, propiedadId: null, comentario: null };

  onSubmit() {
    console.log(this.model);
  }
}
