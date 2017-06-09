import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarPerfil } from './editar-perfil';

@NgModule({
  declarations: [
    EditarPerfil,
  ],
  imports: [
    IonicPageModule.forChild(EditarPerfil),
  ],
  exports: [
    EditarPerfil
  ]
})
export class EditarPerfilModule {}
