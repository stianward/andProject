import { Component, OnInit } from '@angular/core';

//IMPORTAMOS EL SERVICIO CREADO PARA LISTAR LA COLECCIÓN :opinion

import{TarjetaOpinionesService} from '../../services/tarjeta-opiniones.service';



@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {


  //VARIABLE 
obtTarjetas:any;


//CREAMOS VARIABLE EN EL CONSTRUCTOR DE TIPO PRIVADO QUE CONTIENE TODO EL SERVICIO CONFIGURADO
//CREAMOS LA FUNCION ANONIMA QUE GUARDARA EN LA VARIABLE TIPO ANY LA INFORMACION DE INTEM


constructor(private obtServicioTarjetaOpiniones:TarjetaOpinionesService) {
this.obtServicioTarjetaOpiniones.returnaItemsBd().subscribe(tarjetas=>{
this.obtTarjetas=tarjetas;

console.log(this.obtTarjetas)




});



   }

  
  ngOnInit(): void {
  }

}
