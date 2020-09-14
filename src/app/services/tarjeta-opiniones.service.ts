import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';




export interface Item { tituloEstado: string; tituloDescriptivo:string; descripcion:string; participantes:number;color:string}
@Injectable({
  providedIn: 'root'
})
export class TarjetaOpinionesService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('opinion');
    this.items = this.itemsCollection.valueChanges();
  }

returnaItemsBd(){
return this.items;

}


}