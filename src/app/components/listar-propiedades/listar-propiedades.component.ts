import { Component } from '@angular/core';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-listar-propiedades',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CarouselModule],
  templateUrl: './listar-propiedades.component.html',
  styleUrl: './listar-propiedades.component.css'
})
export class ListarPropiedadesComponent {

  propiedades: Propiedad[] = [];

  constructor(
    private propiedadService: PropiedadService
  ){}

  ngOnInit(): void{
    this.listarPropiedades();
  }

  customOptions: OwlOptions = {
    loop: true, // para que el carrusel rote infinitamente
    mouseDrag: true, // para habilitar el arrastre con el ratón
    touchDrag: true, // para habilitar el arrastre táctil en dispositivos móviles
    pullDrag: true, // permite arrastrar el carrusel hacia adelante o hacia atrás
    dots: false, // para ocultar los puntos de navegación inferiores
    navSpeed: 700, // la velocidad de la navegación
    navText: ['<', '>'], // texto para la navegación (puede ser HTML)
    responsive: {
      0: {
        items: 1 // en pantallas pequeñas, muestra 1 ítem
      },
      480: {
        items: 2 // en pantallas medianas, muestra 2 ítems
      },
      768: {
        items: 3 // en pantallas grandes, muestra 3 ítems
      }
    },
    nav: true // para mostrar la navegación (flechas)
  };

  listarPropiedades(){
    this.propiedadService.listarPropiedades().then(response =>{
      this.propiedades = response;
    })
    console.log("Propiedades listadas");
  }

}
