import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Arrendador } from '../../models/Arrendador';
import { ArrendadorService } from '../../services/arrendador.service';

@Component({
  selector: 'app-listar-arrendadores',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './listar-arrendadores.component.html',
  styleUrl: './listar-arrendadores.component.css'
})
export class ListarArrendadoresComponent {

  arrendadores: Arrendador[] = [];

  constructor(
    private arrendadorService: ArrendadorService
  ){}

  ngOnInit(): void{
    this.listarArrendadores();
  }
  
  listarArrendadores(){
    this.arrendadorService.listarArrendadores().then(response =>{
      this.arrendadores = response;
    })
  }


  /*
  eliminarArrendador(id: number) {
    // Implementación básica para eliminar un arrendador
    // Aquí se llama al servicio para eliminar el arrendador por su ID
    if (confirm('¿Estás seguro de que deseas eliminar este arrendador?')) {
      this.arrendadorService.eliminarArrendador(id).then(response => {
        if (response) {
          // Si la eliminación es exitosa, actualizar la lista de arrendadores
          this.listarArrendadores();
          console.log('Arrendador eliminado con éxito.');
        } else {
          console.log('Error al eliminar el arrendador.');
        }
      });
    }
  }*/


}
