export class Educacion {
    id?: number;
    nombreE: string;
    titulo: string;
    descripcionE: string;
    fechaE: Date;

    constructor(nombreE: string,titulo: string, descripcionE: string, fechaE: Date){
        this.nombreE = nombreE;
        this.titulo = titulo;
        this.descripcionE = descripcionE;
        this.fechaE = fechaE
    }
}
