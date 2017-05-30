import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams,LoadingController,Loading } from 'ionic-angular';
import {Tab} from '../tab/tab';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import  {AuthProvider} from '../../providers/auth';


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
  username:any;
  password:any;
  email:any;
  password2:any;
  loading:Loading;

  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController, 
  public fb:FormBuilder,
  public fb1:FormBuilder,
  public loadingCtrl:LoadingController,
  public authData:AuthProvider) {
    this.login=this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required]
    });

    this.registro=this.fb1.group({
      username:["",Validators.required],
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
