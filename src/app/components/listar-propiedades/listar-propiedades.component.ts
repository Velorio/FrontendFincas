import { Component } from '@angular/core';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listar-propiedades',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
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
  
  listarPropiedades(){
    this.propiedadService.listarPropiedades().then(response =>{
      this.propiedades = response;
    })
  }

}
