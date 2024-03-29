import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Mapa } from '../pages/mapa/mapa';
import { Detalles } from '../pages/detalles/detalles';
import { Home } from '../pages/home/home';
import { Buscador } from '../pages/buscador/buscador';
import { Perfil } from '../pages/perfil/perfil';
import  {AuthProvider} from '../providers/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Login } from '../pages/login/login';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AngularFireDatabase} from 'angularfire2/database';



export const CONFIG={
    apiKey: "AIzaSyBKZEFrPUNFyaO6p-pABPbPdT47EZtm6PY",
    authDomain: "rentralia-163708.firebaseapp.com",
    databaseURL: "https://rentralia-163708.firebaseio.com",
    projectId: "rentralia-163708",
    storageBucket: "rentralia-163708.appspot.com",
    messagingSenderId: "626428298411"  
}


@NgModule({
  declarations: [
    MyApp,
    Home,
    Login,
    Buscador,
    Perfil,
    Mapa,
     Detalles
    
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONFIG),
    AngularFireAuthModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Buscador,
    Perfil,
    Mapa,
    Login,
    Detalles
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    SplashScreen,
    AuthProvider,
    AngularFireDatabase,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
