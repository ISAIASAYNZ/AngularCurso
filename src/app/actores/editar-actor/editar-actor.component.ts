import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit {
  constructor(private activedRoute: ActivatedRoute) {}

    modelo: actorDTO = {nombre: 'Isaias', fechaNacimiento: new Date(2002, 6, 7), foto: 'https://th.bing.com/th?id=ODL.63dc870db236b9e7424c74cd1349df25&w=140&h=194&c=10&rs=1&qlt=99&o=6&pid=13.1'}
  ngOnInit(): void {
    this. activedRoute.params.subscribe(params => {
     // alert(params.id);
    }) 
  }
  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  } 

}
