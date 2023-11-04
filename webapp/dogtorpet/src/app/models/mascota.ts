export interface Mascota {
    id:number,
    nombre:string,
    propietario:string,
    fechaNac:Date,
    raza:string,
    color:string,
    genero:'Macho'|'Hembra',
    tipo:number,
    fotoUrl:string
}
