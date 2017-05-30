import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Buscador } from './buscador';

@NgModule({
  declarations: [
    Buscador,
  ],
  imports: [
    IonicPageModule.forChild(Buscador),
  ],
  exports: [
    Buscador
  ]
})
export class BuscadorModule {}
