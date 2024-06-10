import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar desde '@angular/router' en lugar de 'express'
import { generoCreacionDTO } from '../genero'; // Asegúrate de importar generoCreacionDTO si es necesario

1
 
@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent implements OnInit {

constructor(private router: Router){ }

modelo: generoCreacionDTO = {nombre: 'Drama'};

ngOnInit(): void {
}


guardarCambios(genero: generoCreacionDTO){
  console.log(genero); 
  this.router.navigate(['/generos'])
}

}
