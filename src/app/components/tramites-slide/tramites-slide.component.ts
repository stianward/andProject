import { Component, OnInit } from '@angular/core';
import {TramitesSlideService} from '../../services/tramites-slide.service'
@Component({
  selector: 'app-tramites-slide',
  templateUrl: './tramites-slide.component.html',
  styleUrls: ['./tramites-slide.component.css']
})
export class TramitesSlideComponent implements OnInit {

obtTramitesSlide:any;

   
constructor(private obtServicioTramitesSlide:TramitesSlideService) {
  this.obtServicioTramitesSlide.returnaItemsBd().subscribe(tramitesSlide=>{
  this.obtTramitesSlide=tramitesSlide;
  
  console.log(this.obtTramitesSlide)
  
  
  
  
  });
  
  
  
     }

  ngOnInit(): void {
  }

}
