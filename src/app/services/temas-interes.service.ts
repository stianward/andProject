import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Item { titulo: string;labelEnlace:string;imagen:string;descripcion:string;enlace:string; }

@Injectable({
  providedIn: 'root'
})
export class TemasInteresService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('temasInteres');
    this.items = this.itemsCollection.valueChanges();
  }
 
  returnaItemsBd(){
    return this.items;
    
    }
}
