import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {

  constructor(public afAuth: AngularFireAuth) { }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider);
  }

  githubLogin() {
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
