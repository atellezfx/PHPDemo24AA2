import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private loginSvc:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const esMiServidor = request.url.startsWith( environment.urlServidor );
    const token = localStorage.getItem( environment.authToken );
    if( this.loginSvc.loggedIn() && esMiServidor ) {
      request = request.clone({
        setHeaders:{'Authorization':`Bearer ${token}`}
      });
    }
    return next.handle(request);
  }
}
