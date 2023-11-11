import { Usuario } from '../models/usuario';
import { Mascota } from '../models/mascota';
import { Tipo } from '../models/tipo';

export let usuariosPrueba: Usuario[] = [
  { username:'jromo', password:'12345', email:'jromo@correo.net', nombre:'José', apellidos:'Romo' },
  { username:'atellez', password:'12345', email:'atellez@correo.net', nombre:'Alejandro', apellidos:'Téllez' },
  { username:'cgiron', password:'12345', email:'cgiron@correo.net', nombre:'Carlos', apellidos:'Girón' },
  { username:'snieto', password:'12345', email:'snieto@correo.net', nombre:'Susana', apellidos:'Nieto' },
  { username:'jvera', password:'12345', email:'jvera@correo.net', nombre:'Jaime', apellidos:'Vera' }
];

export let tiposPrueba: Tipo[] = [
  {id:1, descripcion:'Perro'},
  {id:2, descripcion:'Gato'},
];

export let mascotasPrueba: Mascota[] = [
  {id:1, nombre:'Denver', propietario:'atellez', fechaNac:new Date('2014-11-18'), raza:'Metizo/Labrador', color:'Miel', genero:'Macho', tipo:1, fotoUrl:'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/denver.jpg'},
  {id:2, nombre:'Camy', propietario:'atellez', fechaNac:new Date('2014-11-18'), raza:'Mestizo/Labrador', color:'Miel/Blanco', genero:'Hembra', tipo:1, fotoUrl:'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/camy.jpg'},
  {id:3, nombre:'Kia', propietario:'atellez', fechaNac:new Date('2016-01-28'), raza:'Mestizo/Galgo', color:'Atigrado', genero:'Hembra', tipo:1, fotoUrl:'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/kia.jpg'},
  {id:4, nombre:'Hamilton', propietario:'atellez', fechaNac:new Date('2018-04-05'), raza:'Corgi', color:'Miel', genero:'Macho', tipo:1, fotoUrl:'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/hamilton.jpg'},
  {id:5, nombre:'Olivia', propietario:'atellez', fechaNac:new Date('2016-08-25'), raza:'Corgi', color:'Miel/Blanco', genero:'Hembra', tipo:1, fotoUrl:'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/olivia.jpg'},
  {id:6, nombre:'Theodore', propietario:'atellez', fechaNac:new Date('2021-11-25'), raza:'Ragdoll', color:'Blanco/Gris', genero:'Macho', tipo:2, fotoUrl:'https://excitedcats.com/wp-content/uploads/2020/09/Ragdoll-Cat.jpg'},
  {id:7, nombre:'Wera', propietario:'jromo', fechaNac:new Date('2012-09-16'), raza:'Cocker Spagniel', color:'Miel', genero:'Hembra', tipo:1, fotoUrl:'https://misanimales.com/wp-content/uploads/2018/11/cocker-spaniel.jpg'},
  {id:8, nombre:'Maya', propietario:'jromo', fechaNac:new Date('2016-10-02'), raza:'Border Collie', color:'Negro/Blanco', genero:'Hembra', tipo:1, fotoUrl:'https://t2.uc.ltmcdn.com/es/posts/8/3/6/como_saber_si_un_border_collie_es_puro_44638_600_square.jpg'},
  {id:9, nombre:'Chicharito', propietario:'snieto', fechaNac:new Date('2018-12-19'), raza:'Mestizo', color:'Negro/Blanco', genero:'Macho', tipo:1, fotoUrl:'https://i.pinimg.com/474x/26/4e/ca/264eca5cd5a8fae9ff8f6d77b42d4a68.jpg'},
  {id:10, nombre:'Aquiles', propietario:'snieto', fechaNac:new Date('2016-03-30'), raza:'Pit Bull', color:'Blanco/Beige', genero:'Macho', tipo:1, fotoUrl:'https://i.pinimg.com/originals/0e/f6/7a/0ef67a2ae564032c7eb80ba870e7ba73.jpg'},
  {id:11, nombre:'Roco', propietario:'cgiron', fechaNac:new Date('2012-03-30'), raza:'Cockapoo', color:'Beige', genero:'Macho', tipo:1, fotoUrl:'https://i.pinimg.com/originals/53/c1/51/53c15188bf7db2e7bcfdadc084cc46f9.jpg'},
  {id:12, nombre:'Lucky', propietario:'cgiron', fechaNac:new Date('2010-03-30'), raza:'Cocker', color:'Miel', genero:'Macho', tipo:1, fotoUrl:'https://cdn.wamiz.fr/cdn-cgi/image/quality=80,width=400,height=400,fit=cover/animal/breed/pictures/61cdd82c1ad1a326747653.jpg'},
  {id:13, nombre:'Molly', propietario:'jvera', fechaNac:new Date('2021-11-30'), raza:'Pomerania', color:'Beige', genero:'Hembra', tipo:1, fotoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pomeranian_Thank_You.jpg/250px-Pomeranian_Thank_You.jpg'},
  {id:14, nombre:'Whiskers', propietario:'jvera', fechaNac:new Date('2021-02-10'), raza:'Snowshoe', color:'Blanco/Beige', genero:'Hembra', tipo:2, fotoUrl:'https://i.pinimg.com/474x/dd/ba/94/ddba94a33f2e216182e9f8347b46c2c4--siamese-cats-kitty-cats.jpg'}
];

