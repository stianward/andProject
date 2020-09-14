import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../../services/comentarios.service';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarioObt: any = { comentario: '' };
  validarComentario = new FormControl('', [Validators.required,Validators.maxLength(255),Validators.minLength(5)]);

  constructor(private crearComentarioServicio: ComentariosService) { }

  ngOnInit(): void {
  }

  //Creamos función para crear comentarios utilizando el servicio comentario.service metodo crearComentario

  crearComentario() {


    this.crearComentarioServicio.crearComentario(this.comentarioObt);

  }
  limpiar() {

    alert("Enviado a firebase!");
console.log(this.validarComentario.valid);

    
  }

}
