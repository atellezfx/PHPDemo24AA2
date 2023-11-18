import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  console.log('Cargando guarda con ruta: ', route.url.pop()?.path);
  const router = inject(Router);
  const loginSvc = inject(LoginService);
  if( loginSvc.loggedIn() ) return true;
  return router.parseUrl('/login');
};
