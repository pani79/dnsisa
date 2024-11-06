/*
Autor: Pani
*/



import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

//  Datos
import { F_REP_APP_LENG, F_REP_APP_ENDPOINT, F_REP_APP_DB, F_REP_APP_AMBIENTE } from 'src/app/info/tasAuxiliares';


@Component({
  selector: 'app-form-repositorios-aplicaciones-creacion',
  templateUrl: './form-repositorios-aplicaciones-creacion.component.html',
  styleUrls: ['./form-repositorios-aplicaciones-creacion.component.css']
})





export class FormRepositoriosAplicacionesCreacionComponent {

  public formulario!: FormGroup; //  = new FormGroup()

  ta_endpoints: any
  ta_tec_leng: any


  constructor(
    public fb: FormBuilder
  ) { 

    this.ta_endpoints = F_REP_APP_ENDPOINT
    this.ta_tec_leng = F_REP_APP_LENG
    this.formularioConfiguracion()
  }


  get fb_inf_pr_nombre(){      return this.formulario.get('fb_inf_pr_nombre');}
  get fb_inf_pr_descripcion(){      return this.formulario.get('fb_inf_pr_descripcion');}

  get fb_tec_leng_java(){      return this.formulario.get('fb_tec_leng_java');}
  get fb_tec_leng_php(){      return this.formulario.get('fb_tec_leng_php');}
  get fb_tec_leng_node(){      return this.formulario.get('fb_tec_leng_node');}
  get fb_tec_leng_frameworks(){      return this.formulario.get('fb_tec_leng_frameworks');}

  get fb_inf_repo_nombre(){      return this.formulario.get('fb_inf_repo_nombre');}
  get fb_inf_repo_url(){      return this.formulario.get('fb_inf_repo_url');}

  get fb_inf_info_url(){      return this.formulario.get('fb_inf_info_url');}
  get fb_inf_info_endPoints(){      return this.formulario.get('fb_inf_info_endPoints');}

  get fb_inf_info_nombre(){      return this.formulario.get('fb_inf_repo_nombre');}


  
  formularioConfiguracion(){
    this.formulario = this.fb.group({
      fb_inf_pr_nombre:        ['', [Validators.required]],
      fb_inf_pr_descripcion:          ['', [Validators.required]],

      fb_tec_leng_java:          ['', [Validators.required]],
      fb_tec_leng_php:          ['', [Validators.required]],
      fb_tec_leng_node:          ['', [Validators.required]],
      fb_tec_leng_frameworks:          ['', [Validators.required]],

      fb_inf_repo_nombre:          ['', [Validators.required]],
      fb_inf_repo_url:          ['', [Validators.required]],

      fb_inf_info_url:          ['', [Validators.required]],
      fb_inf_info_endPoints:            ['', [Validators.required]],

      fb_inf_info_nombre:          ['', [Validators.required]]

    })
  }

}
