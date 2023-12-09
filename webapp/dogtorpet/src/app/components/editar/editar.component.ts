import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/models/mascota';
import { LoginService } from 'src/app/services/login.service';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public formulario:FormGroup;
  public mascota!:Mascota;

  constructor( private builder:FormBuilder, private rutaActual:ActivatedRoute, private mascotaSvc:MascotaService, private loginSvc:LoginService ) {
    this.formulario = this.builder.group({
      id:['', Validators.required],
      nombre:['', Validators.required],
      propietario:[loginSvc.usuarioActual, Validators.required],
      fechaNac:['', Validators.required],
      raza:['', Validators.required],
      color:['', Validators.required],
      genero:['', Validators.required],
      tipo:['', Validators.required],
      fotoUrl:['']
    });
  }

  ngOnInit(): void {
      this.mascota = window.history.state.mascota;
      if( this.mascota ) {
        this.cargarDatos();
      } else {
        this.obtenerMascota().subscribe(
          resultado => {
            this.mascota = resultado;
            this.cargarDatos();
          }
        );
      }
  }

  private obtenerMascota():Observable<Mascota> {
    const mascotaId = this.rutaActual.snapshot.params['id'];
    return this.mascotaSvc.obtener( mascotaId );
  }

  private cargarDatos():void {
    this.formulario.setValue({
      id:this.mascota.id,
      nombre:this.mascota.nombre,
      propietario:this.mascota.propietario,
      fechaNac: formatDate( this.mascota.fechaNac, 'yyyy-MM-dd', 'en-US', '+0000' ),
      raza:this.mascota.raza,
      color:this.mascota.color,
      genero:this.mascota.genero,
      tipo:this.mascota.tipo,
      fotoUrl:this.mascota.fotoUrl
    });
  }

  public enviarDatos():void {
    if( this.formulario.valid ) {
      console.log(this.formulario.value);
    }
  }

}

