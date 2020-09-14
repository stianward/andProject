import { Component, OnInit } from '@angular/core';

//IMPORTAMOS EL SERVICIO CREADO PARA LISTAR LA COLECCIÓN :temasInteres
import{TemasInteresService} from '../../services/temas-interes.service';

@Component({
  selector: 'app-temas-interes',
  templateUrl: './temas-interes.component.html',
  styleUrls: ['./temas-interes.component.css']
})
export class TemasInteresComponent implements OnInit {

 //VARIABLE 
 obtTemasInteres:any;


 constructor(private obtServicioTemasInteres:TemasInteresService) {
  this.obtServicioTemasInteres.returnaItemsBd().subscribe(temasInteres=>{
  this.obtTemasInteres=temasInteres;
  
  console.log(this.obtTemasInteres)
  
  
  
  
  });
  
  
  
     }

  ngOnInit(): void {
  }

}
