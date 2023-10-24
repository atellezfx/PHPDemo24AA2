import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { EditarComponent } from './components/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { LoginComponent } from './components/login/login.component';
import { loginGuard } from './util/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/catalogo', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: CatalogoComponent, canActivate: [loginGuard] },
  { path: 'nuevo', component: AgregarComponent, canActivate: [loginGuard] },
  { path: 'editar/:id', component: EditarComponent, canActivate: [loginGuard] },
  { path: 'eliminar/:id', component: EliminarComponent, canActivate: [loginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
