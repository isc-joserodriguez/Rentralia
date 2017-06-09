import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from'rxjs/Observable';
import { Subscription }from'rxjs/Subscription';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database'
import  {AuthProvider} from '../../providers/auth';
import {Detalles} from '../detalles/detalles';

import { Login } from '../login/login';

import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html', 
})
export class Home {
  listadoCasas:FirebaseListObservable<any>;
  listadoUsuarios:FirebaseListObservable<any>;
  rootPage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public db:AngularFireDatabase) {
    this.listadoCasas=this.db.list('/casas');
     this.listadoUsuarios=this.db.list('/usuarios');
    
   
  }
  detalles(id){
     var detalles= this.db.database.ref('casas/'+id);
     console.log(detalles);
    //this.navCtrl.push(Detalles,this.listadoCasas);
   
  }
 
  crearCasa(){
    this.listadoCasas.push({
      idUsuario:1,
      idCasa:1,
      urlImagen:'gs://rentralia-163708.appspot.com/images/casita.jpg',
      titulo:'Remate en Mololoa',
      costo:1300,
      direccion:{
        calle:'Luna',
        numero:23,
        colonia:'Hierro',
        ciudad:'Tepic',
        estado:'Nayarit'
      },
      mapa:{
        latitud:21.4732073,
        longitud:-104.8655857
      },
      detalles:{
        color:'Azul',
        cuartos:2,
        pisos:2
      },
      enfoque:{
        familia:false,
        estudiantes:true,
        solteros:true,
        mascotas:false
      }
    });
  }
  verDetalles(){
    this.navCtrl.push(Detalles);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}
