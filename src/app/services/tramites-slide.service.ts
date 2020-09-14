import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Item { descripcion: string;estado:string;titulo:string;colorEstado:string;}

@Injectable({
  providedIn: 'root'
})
export class TramitesSlideService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('tramitesSlide');
    this.items = this.itemsCollection.valueChanges();
  }
 
  returnaItemsBd(){
    return this.items;
    
    }
}
