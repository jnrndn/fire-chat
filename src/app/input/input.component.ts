import { Component, Input, OnInit } from '@angular/core';
import { firestore } from 'firebase/app';
import { DataService } from './../data.service';
import { Message } from './../message.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.scss' ],
})
export class InputComponent implements OnInit {

  @Input() user: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  sendMessage(payload) {
    if (payload !== null) {
      const message: Message = {
        message: payload,
        user: this.user,
        timestamp: firestore.FieldValue.serverTimestamp(),
      };
      this.dataService.addMessage(message);
    }
  }

}
