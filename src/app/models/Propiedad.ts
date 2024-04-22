export class Propiedad{
    constructor(
        public id?: number|null,
        public calificacion?: number|null,
        public precio?: number|null,
        public ubicacion?: string|null,
        public disponibilidad?: number|null
    ){}
}