import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {AuthProvider} from '../../providers/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import {Login} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class Perfil {
  afAuth: AngularFireAuth;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authData:AuthProvider,afAuth: AngularFireAuth) {
    this.afAuth=afAuth;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil');
  }

  logout(){
  
      
   
  }

}
