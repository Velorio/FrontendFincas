
import {{ Component }} from '@angular/core';

@Component({{
  selector: 'app-calificacionArrendatario',
  templateUrl: './calificacionArrendatario.component.html',
  styleUrls: ['./calificacionArrendatario.component.css']
}})
export class CalificacionArrendatarioComponent {{
  model = {{ propiedadId: null, arrendatarioId: null, puntuacion: null, comentario: '' }};

  constructor() {{}}

  onSubmit() {{
    if (this.model.puntuacion < 1 || this.model.puntuacion > 5) {{
      console.error('La puntuación debe estar entre 1 y 5');
      return;
    }}
    console.log('Enviando datos:', this.model);
    setTimeout(() => {{
      console.log('Datos enviados con éxito');
    }}, 1000);
  }}
}}
