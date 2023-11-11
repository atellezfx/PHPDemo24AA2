import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mascotasPrueba } from '../models/datos-prueba';
import { Mascota } from '../models/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  // TODO: Implementar la URL del Servidor (API)

  constructor() { }

  public obtener(id:number): Observable<Mascota> {
    const resultado = mascotasPrueba.filter( m => m.id == id );
    return of(resultado[0]);
  }

  public lista(propietario:string): Observable<Mascota[]> {
    const resultado = mascotasPrueba.filter( m => m.propietario == propietario );
    return of(resultado);
  }

  public insertar( m:Mascota ): Observable<Mascota> {
    // TODO: Implementar el proceso de inserción en el backend
    console.log( `Insertando registro de ${m.nombre}` );
    return of( m );
  }

  public editar( m:Mascota ): Observable<Mascota> {
    // TODO: Implementar el proceso de edición en el backend
    console.log( `Editando registro de ${m.nombre}` );
    return of( m );
  }

  public eliminar( m:Mascota ): Observable<Mascota> {
    // TODO: Implementar el proceso de eliminación en el backend
    console.log( `Eliminando registro de ${m.nombre}` );
    return of( m );
  }

}
