import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import {Tab} from '../tab/tab';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public fb:FormBuilder,public fb1:FormBuilder,) {
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
    if(this.username=='admin' && this.password=='1234'){
      let all: any={username:this.username,password:this.password};
      this.navCtrl.push(Tab)
    }
  }

}
