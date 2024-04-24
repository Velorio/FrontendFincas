import { Injectable } from '@angular/core';
import { Propiedad } from '../models/Propiedad';
import { Observable, of } from 'rxjs';

import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  private apiUrl = 'http://localhost:8080/propiedades';

  constructor() { }

  crearPropiedad( propiedad:Propiedad ): Promise< Propiedad > {
    return axios.post<Propiedad>(this.apiUrl, propiedad).then(response => response.data);
  }

  listarPropiedades(): Promise< Propiedad[] >{
    //return axios.get< Propiedad[] >(this.apiUrl).then(response => response.data);

    return Promise.resolve([
      {
        id: 1,
        calificacion: 5,
        precio: 100000,
        ubicacion: 'Ubicación 1',
        disponibilidad: 1,
        imagenUrl: 'assets/images/finca1.jpg'
      },
      {
        id: 2,
        calificacion: 3,
        precio: 500000,
        ubicacion: 'Ubicación 2',
        disponibilidad: 1,
        imagenUrl: 'assets/images/finca2.jpg'
      },
      {
        id: 3,
        calificacion: 7,
        precio: 8000000,
        ubicacion: 'Ubicación 3',
        disponibilidad: 0,
        imagenUrl: 'assets/images/finca3.jpg'
      },
      {
        id: 4,
        calificacion: 6,
        precio: 4000,
        ubicacion: 'Ubicación 4',
        disponibilidad: 0,
        imagenUrl: 'assets/images/finca4.jpg'
      },
      {
        id: 5,
        calificacion: 9,
        precio: 70000,
        ubicacion: 'Ubicación 5',
        disponibilidad: 1,
        imagenUrl: 'assets/images/finca5.jpg'
      },
    ]);
  }

}
