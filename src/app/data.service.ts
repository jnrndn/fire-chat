import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Message } from './message.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  message: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) {
    this.message = this.afs.collection<Message>('/messages');
  }

  addMessage(payload) {
    this.message.add(payload);
  }

}
