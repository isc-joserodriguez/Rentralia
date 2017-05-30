import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private authState:Observable<firebase.User>;
  private currentUser:firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    
  }
  loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
  return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
}
resetPassword(email: string): firebase.Promise<any> {
  return this.afAuth.auth.sendPasswordResetEmail(email);
}

signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
  return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
}

logoutUser(): firebase.Promise<any> {
  return this.afAuth.auth.signOut();
}

}
