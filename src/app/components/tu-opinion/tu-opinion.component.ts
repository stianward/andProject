import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'opinion',
  templateUrl: './tu-opinion.component.html',
  styleUrls: ['./tu-opinion.component.css']
})
export class TuOpinionComponent implements OnInit {

  opinion: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.opinion = firestore.collection('opinion').valueChanges();

  }

  ngOnInit(): void {
  }

}
