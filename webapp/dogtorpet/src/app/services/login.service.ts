import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Mensaje, Token } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly servidor = `${environment.urlServidor}/login`;

  constructor( private router:Router, private client:HttpClient ) { }

  public login( usr:{username:string, password:string} ): Observable<Token|Mensaje> {
    return this.client.post<Token|Mensaje>(this.servidor, usr);
  }

  public logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  public usuarioActual(): string | null {
    return localStorage.getItem(environment.usuarioActual);
  }

  public loggedIn(): boolean {
    return !!this.usuarioActual();
  }

}
