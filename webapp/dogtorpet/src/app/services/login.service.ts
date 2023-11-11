import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { Observable, of, throwError } from 'rxjs';
import { usuariosPrueba } from '../models/datos-prueba';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // TODO: Implementar la URL del Servidor (API)

  constructor( private router:Router ) { }

  public login( usr:{username:string, password:string} ): Observable<Usuario> {
    // TODO: Implementar el login a través del backend
    const resultado:Usuario = usuariosPrueba.filter( u => u.username == usr.username)[0];
    if( resultado && resultado.password == usr.password) {
      // Usuario autenticado exitosamente
      localStorage.setItem('usuarioActual', usr.username);
      return  of(resultado);
    }
    return throwError( () => new Error('Credenciales incorrectas') );
  }

  public logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  public usuarioActual(): string | null {
    return localStorage.getItem('usuarioActual');
  }

  public loggedIn(): boolean {
    return !!this.usuarioActual();
  }

}
