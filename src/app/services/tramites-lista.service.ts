import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Item { titulo: string;estado:string;entidad:string;enlace:string;costo:string; }

@Injectable({
  providedIn: 'root'
})
export class TramitesService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('tramites');
    this.items = this.itemsCollection.valueChanges();
  }
 
  returnaItemsBd(){
    return this.items;
    
    }
}
