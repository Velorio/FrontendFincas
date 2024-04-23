import { Injectable } from '@angular/core';
import { Arrendador } from '../models/Arrendador';
import { Observable, of } from 'rxjs';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {

  private apiUrl = 'http://localhost:8080/arrendadores';

  constructor() { }

  crearArrendador(arrendador: Arrendador): Promise<Arrendador> {
    return axios.post<Arrendador>(this.apiUrl, arrendador).then(response => response.data);
  }

  listarArrendadores(): Promise<Arrendador[]> {
    return axios.get<Arrendador[]>(this.apiUrl).then(response => response.data);
  }


}
