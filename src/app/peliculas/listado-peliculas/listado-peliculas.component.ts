import { Component, Input, input } from '@angular/core';
@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
  
})
export class ListadoPeliculasComponent {

  constructor() {}

  @Input()
  peliculas;
  ngOnInit(): void {
 
    
}
remover(indicePelicula: number): void {
    this.peliculas.splice(indicePelicula, 1);
} 

}