import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mascota } from '../models/mascota';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private readonly servidor = `${environment.urlServidor}/mascota`;

  constructor( private client:HttpClient ) { }

  public obtener(id:number): Observable<Mascota> {
    return this.client.get<Mascota>(`${this.servidor}/${id}`);
  }

  public lista(propietario:string): Observable<Mascota[]> {
    return this.client.get<Mascota[]>(`${this.servidor}/catalogo/${propietario}`);
  }

  public insertar( m:Mascota ): Observable<Mascota> {
    console.log( `Insertando registro de ${m.nombre}` );
    return this.client.post<Mascota>(this.servidor, m);
  }

  public editar( m:Mascota ): Observable<Mascota> {
    console.log( `Editando registro de ${m.nombre}` );
    return this.client.put<Mascota>(`${this.servidor}/${m.id}`, m);
  }

  public eliminar( m:Mascota ): Observable<Mascota> {
    console.log( `Eliminando registro de ${m.nombre}` );
    return this.client.delete<Mascota>(`${this.servidor}/${m.id}`);
  }

}
