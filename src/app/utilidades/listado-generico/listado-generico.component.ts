
import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { ListadoPeliculasComponent } from '../../peliculas/listado-peliculas/listado-peliculas.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrl: './listado-generico.component.css'
})
export class ListadoGenericoComponent {

  @Input()
  listado;
  constructor(){}
  ngOnInit(): void {
    
    
  }
}
