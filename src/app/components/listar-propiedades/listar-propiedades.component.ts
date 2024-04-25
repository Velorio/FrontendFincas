import { Component } from '@angular/core';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-listar-propiedades',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule], // Importa NgbCarouselModule aquí
  templateUrl: './listar-propiedades.component.html',
  styleUrls: ['./listar-propiedades.component.css']
})
export class ListarPropiedadesComponent {

  propiedades: Propiedad[] = [];

  constructor(
    private propiedadService: PropiedadService
  ){}



  ngOnInit(): void {
    this.listarPropiedades();
  }

  listarPropiedades(): void {
    this.propiedadService.listarPropiedades()
      .then(response => {
        console.log('Data received: ', response);
        this.propiedades = response;
      })
      .catch(error => console.error('Hubo un error al listar las propiedades:', error));
  }
}
