import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:Usuario = new Usuario;
  email = '';
  clave = '';
  repetirClave = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registro() {

    if(this.email != '' && this.clave != '' && this.repetirClave != '') {

      if(this.clave == this.repetirClave) {
        let usuarios = [];
        
        this.usuario.email = this.email;
        this.usuario.clave = this.clave;
  
        let usrStg = localStorage.getItem('usuarios');
        console.log(usrStg);
  
        if(usrStg != null) {
          usuarios = JSON.parse(usrStg)
          console.log(usuarios);
        }
      
        usuarios.push(this.usuario);
  
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        this.router.navigate(['/bienvenido'])

      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Las contraseñas no coinciden',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }

    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Debe completar todos los campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    
  }

}
