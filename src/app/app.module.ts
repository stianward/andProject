import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TuOpinionComponent } from './components/tu-opinion/tu-opinion.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { TemasInteresComponent } from './components/temas-interes/temas-interes.component';
import { TramitesComponent } from './components/tramites/tramites.component';
import { TramitesSlideComponent } from './components/tramites-slide/tramites-slide.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import{FormsModule} from '@angular/forms';
 import{ReactiveFormsModule} from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TuOpinionComponent,
    OpinionesComponent,
    TemasInteresComponent,
    TramitesComponent,
    TramitesSlideComponent,
    ComentariosComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
   ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
