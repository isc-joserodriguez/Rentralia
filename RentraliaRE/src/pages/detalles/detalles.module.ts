import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Detalles } from './detalles';

@NgModule({
  declarations: [
    Detalles,
  ],
  imports: [
    IonicPageModule.forChild(Detalles),
  ],
  exports: [
    Detalles
  ]
})
export class DetallesModule {}
