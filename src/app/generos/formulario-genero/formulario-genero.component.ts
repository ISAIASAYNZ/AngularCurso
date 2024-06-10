import { Component, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../utilidades/validadores/primeraLetraMayuscula';
import { EventEmitter } from '@angular/core'; // Importar desde '@angular/core' en lugar de 'stream'
import { generoCreacionDTO } from '../genero';


@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent {
  
  constructor( private formBuilder: FormBuilder){}

  form: FormGroup;

@Input()
modelo: generoCreacionDTO;  

  @Output()
  submit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void { 
    this.form = this.formBuilder.group({
      nombre: ['' , {
        validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }]
    }); 
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios(){
    this.submit.emit(this.form.value);
  }

 
  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if (campo.hasError('minlength')){
      return 'La longitud minima es de 3 caracteres'
    }

    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }
}
