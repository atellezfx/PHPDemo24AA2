import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario:FormGroup;
  mensajeError:string = "";

  constructor( private builder:FormBuilder, private loginSvc:LoginService, private router:Router ) {
    this.formulario = builder.group({ username:[''], password:[''] });
  }

  public enviarDatos(): void {
    const credenciales = this.formulario.value;
    console.log(credenciales);
    this.loginSvc.login( credenciales ).subscribe({
      next: datos => this.procesarRespuesta( datos, credenciales ),
      error: datos => this.mensajeError = datos
    });
  }

  public procesarRespuesta( datos:any, usuario:Usuario ): void { // TODO: Mejorar el tipo del parámetro datos
    this.router.navigateByUrl('/catalogo');
  }

}
