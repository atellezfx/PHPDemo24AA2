import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { LoginService } from 'src/app/services/login.service';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  mascotas!:Mascota[];

  constructor( private mascotaSvc:MascotaService, private loginSvc:LoginService ) { }

  public ngOnInit(): void {
    const propietario = String(this.loginSvc.usuarioActual());
    this.mascotaSvc.lista( propietario ).subscribe(
      resultado => this.mascotas = resultado
    );
  }

}
