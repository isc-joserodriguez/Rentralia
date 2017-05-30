import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Mapa } from '../pages/mapa/mapa';
import { Home } from '../pages/home/home';
import { Buscador } from '../pages/buscador/buscador';
import { Perfil } from '../pages/perfil/perfil';
import { Tab } from '../pages/tab/tab';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Login } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Buscador,
    Perfil,
    Mapa,
    Login,
    Tab
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Buscador,
    Perfil,
    Login,
    Mapa,
    Tab
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
