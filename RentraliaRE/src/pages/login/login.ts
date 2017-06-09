import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams,LoadingController,Loading } from 'ionic-angular';
import {Tab} from '../tab/tab';

import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import  {AuthProvider} from '../../providers/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database'
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  public registrar:boolean;
  public valor:any;
  public opt:number=0;
  public cont:number=0;
  login:FormGroup;
  registro:FormGroup;
  username:string;
  password:string;
  arreglo:number[];
  email:any;
  password2:any;
  loader:any;
  loading:Loading;
  listadoUsuarios:FirebaseListObservable<any>;
  public URI:'https://rentralia-163708.firebaseapp.com/__/auth/handler';
  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController, 
  public fb:FormBuilder,
  public fb1:FormBuilder,
  public afAuth: AngularFireAuth,
  public loadingCtrl:LoadingController,
  public authData:AuthProvider,
  public db:AngularFireDatabase) {
    

     this.listadoUsuarios=this.db.list('/usuarios');

    this.login=this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required]
    });

    this.registro=this.fb1.group({
      password:["",Validators.required],
      email:["",[Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      password2:["",Validators.required]
    });
  }
     toggleRegistro(){
    this.cont+=1;
    if(this.cont > 1){
      this.cont=0;
      this.opt=0;
    }else{
    this.opt=1;
    }
   
  }
    getId(){
      let lista= this.listadoUsuarios;
      lista.forEach(element => {
       this.arreglo=element.idUsuario;
      });

      return Math.max.apply(null, this.arreglo);     

    }
   showLoading() {
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loader.present();
  }
   crearUsuario(){
    console.log('Usuario'+this.email+'-'+this.password);
 
    this.authData.signupUser(this.email,this.password).
    then(authData=>{
       let prompt = this.alertCtrl.create({
        title: 'Felicidades',
        subTitle: 'Su cuenta ha sido creada!',
        buttons: ['OK']
      });
      prompt.present();
      this.navCtrl.setRoot('Tab');
     
    },error=>{
        this.loading.dismiss().then(()=>{
        let alert =this.alertCtrl.create({
          message:error.message,
          buttons:[
            {
              text:"OK",
              role:'cancel'
            }
          ]
        });
        alert.present();
      });

    });   
    
this.loading =this.loadingCtrl.create({
  dismissOnPageChange:true,
});

this.loading.present();


  }


  
  sesionFast(){
     this.authData.loginUser('jose.estrada.madera@gmail.com','qwerty123')
    .then( authData=> {

      this.navCtrl.setRoot('Tab');
     

    },error=>{
      this.loading.dismiss().then(()=>{
        let alert =this.alertCtrl.create({
          message:error.message,
          buttons:[
            {
              text:"OK",
              role:'cancel'
            }
          ]
        });
        alert.present();
      });
    });

this.loading =this.loadingCtrl.create({
  dismissOnPageChange:true,
});


this.loading.present();

  }

  gotoInicio(){
    this.authData.loginUser(this.username,this.password)
    .then( authData=> {
      this.navCtrl.setRoot('Tab');
    },error=>{
      this.loading.dismiss().then(()=>{
        let alert =this.alertCtrl.create({
          message:error.message,
          buttons:[
            {
              text:"OK",
              role:'cancel'
            }
          ]
        });
        alert.present();
      });
    });

this.loading =this.loadingCtrl.create({
  dismissOnPageChange:true,
});


this.loading.present();


  }

}
