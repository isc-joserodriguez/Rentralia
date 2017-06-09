import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams,LoadingController,Loading  } from 'ionic-angular';
import  {AuthProvider} from '../../providers/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import {  Login} from '../login/login';




@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class Perfil {
  afAuth: AngularFireAuth;
  uDataEmail:String;
  uDataNick:string;
  nickName:string;
  loading:Loading;
  tieneNick:boolean= false;
  constructor(public navCtrl: NavController,public loadingCtrl:LoadingController, public navParams: NavParams,public authData:AuthProvider,afAuth: AngularFireAuth,  public alertCtrl: AlertController) {
   
    console.log(this.authData);
    this.uDataEmail= this.authData.showEmail();
    this.uDataNick= this.authData.showNick();
}
  editarNick(){
    console.log(this.nickName);
    this.authData.editNick(this.nickName)
    .then((authData)=>{
      this.tieneNick=true;
      console.log('NickAutorizado');
      let prompt = this.alertCtrl.create({
        title: 'Felicidades',
        subTitle: 'Su cuenta ha sido creada!',
        buttons: ['OK']
      });
      prompt.present();
      prompt.dismiss();
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil');
  }

  logout(){
  this.authData.logoutUser();
  this.navCtrl.push(Login);

      
   
  }

}
