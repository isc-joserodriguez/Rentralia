import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Mapa } from '../mapa/mapa';
import { Home } from '../home/home';
import { Buscador } from '../buscador/buscador';
import { Perfil } from '../perfil/perfil';
import { Login } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the Tab tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
@IonicPage()
export class Tab {

  tab1Root: any = Home;
  tab2Root: any = Buscador;
  tab3Root: any = Mapa;
  tab4Root: any = Perfil;
  constructor(public navCtrl: NavController,afAuth: AngularFireAuth) {
    
    
  }
  

}
