import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

    form: FormGroup;

    @Input()
    modelo: actorDTO;
    
    @Output() 
    Onsubmit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required]
      },
    ],
      fechaNacimiento: '',
      foto: '',
      biografia: ''
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(file: File) {
    this.form.get('foto').setValue(file);
  }

  cambioMarkdown(texto: string) {
    this.form.get('biografia').setValue(texto);
  }

  onSubmit() {
    this.Onsubmit.emit(this.form.value);
}
}