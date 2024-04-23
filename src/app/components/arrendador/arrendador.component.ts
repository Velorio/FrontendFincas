import { Component } from '@angular/core';

@Component({
  selector: 'app-arrendador',
  templateUrl: './arrendador.component.html',
  styleUrls: ['./arrendador.component.css']
})
export class ArrendadorComponent {
  model = { nombre: null, direccion: null, telefono: null, email: null };

  onSubmit() {
    console.log(this.model);
  }
}
