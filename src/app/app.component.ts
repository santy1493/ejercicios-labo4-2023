import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primera-app-angular';
  variableInput = '';

  numero1 = '0';
  numero2 = '0';
  resultado = 0;

  edadUno = '0';
  edadDos = '0';
  sumaEdad = 0;
  promedioEdad = 0;

  imagen = '../assets/tommy-vercetti-with-a-blue-hawaiian-shirt-49980-2880x1800.jpg'

  cambiarTitulo(titulo:string) {
    this.title = titulo;
  }

  sumar() {
    this.resultado = parseInt(this.numero1) + parseInt(this.numero2);
  }

  calcular() {
    this.sumaEdad = parseInt(this.numero1) + parseInt(this.numero2);
    this.promedioEdad = this.sumaEdad/2;
  }
}
