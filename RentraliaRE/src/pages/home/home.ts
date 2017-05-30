import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from'rxjs/Observable';
import { Subscription }from'rxjs/Subscription';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database'
import  {AuthProvider} from '../../providers/auth';


import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html', 
})
export class Home {
  listadoCasas:FirebaseListObservable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {
    this.listadoCasas=this.db.list('/casas');
  }

  crearCasa(){
    this.listadoCasas.push({
      idUsuario:1,
      idCasa:2,
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}
