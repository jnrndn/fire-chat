import { Component, OnInit, Input } from '@angular/core';
import { Message } from './../message.interface';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: [ './messages.component.scss' ],
})
export class MessagesComponent implements OnInit {

  @Input() message: Message;
  @Input() user: string;


  constructor() { }

  ngOnInit() {
  }

}
