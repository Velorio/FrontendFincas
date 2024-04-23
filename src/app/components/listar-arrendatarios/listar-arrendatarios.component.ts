import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Arrendatario } from '../../models/Arrendatario';
import { ArrendatarioService } from '../../services/arrendatario.service';

@Component({
  selector: 'app-listar-arrendatarios',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './listar-arrendatarios.component.html',
  styleUrl: './listar-arrendatarios.component.css'
})
export class ListarArrendatariosComponent {

  arrendatarios: Arrendatario[] = [];

  constructor(
    private arrendatarioService: ArrendatarioService
  ){}
  
  ngOnInit(): void{
    this.listarArrendatarios();
  }

  listarArrendatarios(){
    this.arrendatarioService.listarArrendatarios().then(response =>{
      this.arrendatarios = response;
    })
  }

}
