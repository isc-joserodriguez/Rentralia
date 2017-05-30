import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import firebase from 'firebase/app';


/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

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
