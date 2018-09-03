import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Message } from './../message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: [ './chat.component.scss' ],
})
export class ChatComponent implements OnInit {
  @Input() user: string;

  messages: Observable<any[]>;
  messageRef: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) {
    this.messageRef = afs.collection<Message>('/messages', ref => ref.orderBy('timestamp'));
  }

  ngOnInit() {
    this.messages = this.messageRef.valueChanges();
  }

}
