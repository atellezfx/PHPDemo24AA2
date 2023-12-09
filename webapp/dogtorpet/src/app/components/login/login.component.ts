import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Token, Mensaje } from 'src/app/models/auth';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

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

  public procesarRespuesta( datos:Token|Mensaje, usuario:Usuario ): void {
    if( 'token' in datos ) {
      localStorage.setItem( environment.usuarioActual, usuario.username );
      localStorage.setItem( environment.authToken, datos.token );
      this.router.navigateByUrl('/catalogo');
    } else {
      localStorage.removeItem( environment.usuarioActual );
      localStorage.removeItem( environment.authToken );
      this.mensajeError = `${datos.codigo}: ${datos.mensaje}`;
    }
  }

}
