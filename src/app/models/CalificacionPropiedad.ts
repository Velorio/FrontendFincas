import { Arrendador } from "./Arrendador";
import { Propiedad } from "./Propiedad";

export class CalificacionPropiedad {
    constructor(
        public id_cal_propiedad?: number | null,
        public calificacion?: number | null,
        public arrendador?: Arrendador | null,
        public propiedad?: Propiedad | null
    ) {}
}
