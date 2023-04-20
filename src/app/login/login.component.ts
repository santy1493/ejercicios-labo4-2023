import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario = new Usuario;
  email = '';
  clave = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.usuario.email = this.email;
    this.usuario.clave = this.clave;

    let usuarios = [];

    let usrStg = localStorage.getItem('usuarios');

    if(usrStg != null) {
      usuarios = JSON.parse(usrStg);
      console.log(usuarios);

      let usr;

      for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].email == this.usuario.email) {
          usr = usuarios[i];
          break;
        }
      }

      if(usr != null) {
        if(usr.clave == this.usuario.clave) {
          this.router.navigate(['/bienvenido'])
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Contraseñas invalida',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Email invalido',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }
  }

}
