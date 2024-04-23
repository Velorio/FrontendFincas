import { Arrendador } from './Arrendador';
import { Arrendatario } from './Arrendatario';

export class CalificacionArrendatario {
    constructor(
        public id_cal_arrendador?: number | null,
        public calificacion?: number | null,
        public arrendador?: Arrendador | null,
        public arrendatario?: Arrendatario | null
    ) {}
}
