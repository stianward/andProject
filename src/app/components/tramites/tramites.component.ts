import { Component, OnInit } from '@angular/core';
import {TramitesService} from '../../services/tramites-lista.service'

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {

  //VARIABLE 
  obtTramites:any;


  //CREAMOS VARIABLE EN EL CONSTRUCTOR DE TIPO PRIVADO QUE CONTIENE TODO EL SERVICIO CONFIGURADO
  //CREAMOS LA FUNCION ANONIMA QUE GUARDARA EN LA VARIABLE TIPO ANY LA INFORMACION DE INTEM
  
  
  constructor(private obtServicioTramites:TramitesService) {
  this.obtServicioTramites.returnaItemsBd().subscribe(tramites=>{
  this.obtTramites=tramites;
  
  console.log(this.obtTramites)
  
  
  
  
  });
  
  
  
     }

  ngOnInit(): void {
  }

}
