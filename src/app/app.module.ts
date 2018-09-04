import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from '../environments/firebase.config';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { InputComponent } from './input/input.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessagesComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
