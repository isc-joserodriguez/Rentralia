import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';


/**
 * Generated class for the Perfil page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class Perfil {
public creado: boolean;
public creados: boolean;
public agregado: boolean;
public guardado: boolean;
public formulario:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public form:FormBuilder) {
    this.agregado = true;
    this.creado = false;
    this. guardado = false;
    this.formulario = this.form.group({
    nombre:["",Validators.required],
    apPaterno:["",Validators.required],
    apMaterno:["",Validators.required],
    direccion:["",Validators.required],
    telefono:["",Validators.required]
    });
}

 
  public agregar(){
    this.agregado=false;
    this.creado = true;
    this.guardado = true; 
  }

   public guardar(){
    this.creado = true;
    this.creados = true;
    if(this.formulario.valid){
    this.agregado=false;
    this.guardado = false; 
    }
  }

   public cancelar(){
    this.agregado=true;
    this.creado = false;
    this.guardado =false; 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil');
  }

}
