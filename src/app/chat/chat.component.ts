import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Message } from './../message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: [ './chat.component.scss' ],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @Input() user: string;

  @ViewChild('messagesBox') private messageBox: ElementRef;

  messages: Observable<any[]>;
  messageRef: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) {
    this.messageRef = this.afs.collection<Message>('/messages', ref => ref.orderBy('timestamp'));
  }

  ngOnInit() {
    this.messages = this.messageRef.valueChanges();
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.messageBox.nativeElement.scrollTop = this.messageBox.nativeElement.scrollHeight;
    } catch (err) {
      console.log('error scrolling message box', err);
    }
  }
}
