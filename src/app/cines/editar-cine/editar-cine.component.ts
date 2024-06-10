import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent implements OnInit {

  constructor() { }

   modelo: cineDTO = {nombre: 'Cinemex'}

  ngOnInit(): void {
  }
  
  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
  

}
