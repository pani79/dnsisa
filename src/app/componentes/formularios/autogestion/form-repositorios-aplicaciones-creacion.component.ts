/*
Autor: Pani
*/



import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

//  Datos
import { 
  F_REP_APP_LENG, 
  F_REP_APP_ENDPOINT, 
  F_REP_APP_DB, 
  F_REP_APP_AMBIENTE,
  F_REP_GRUPO,
  F_TEC_TIPO
} from 'src/app/info/tasAuxiliares';


@Component({
  selector: 'app-form-repositorios-aplicaciones-creacion',
  templateUrl: './form-repositorios-aplicaciones-creacion.component.html',
  styleUrls: ['./form-repositorios-aplicaciones-creacion.component.css']
})





export class FormRepositoriosAplicacionesCreacionComponent {

  public formulario!: FormGroup; //  = new FormGroup()

  ta_endpoints: any
  ta_tec_leng: any
  ta_serv_db: any
  ta_despliegue: any
  ta_tec_tipo: any
  ta_repo_grupo: any

  formSecciones: any  = {
    backends: false,
    apis: false,
    tecnoTipo: '',
    tecnoFront: '',
    tecnoBack: '',
    dbs: false,
    dbsOtro: false,
    caches: false,
    ambienteDespliegueOtro: false
  }
  endPoints: any[] = []

  

  constructor(
    public fb: FormBuilder
  ) { 
    this.ta_endpoints = F_REP_APP_ENDPOINT
    this.ta_tec_leng = F_REP_APP_LENG
    this.ta_serv_db = F_REP_APP_DB
    this.ta_despliegue = F_REP_APP_AMBIENTE
    this.ta_tec_tipo = F_TEC_TIPO
    this.ta_repo_grupo = F_REP_GRUPO
    this.formularioConfiguracion()
  }


  get fb_inf_pr_nombre(){      return this.formulario.get('fb_inf_pr_nombre');}
  get fb_inf_pr_descripcion(){      return this.formulario.get('fb_inf_pr_descripcion');}

  get fb_tec_leng_java(){      return this.formulario.get('fb_tec_leng_java');}
  get fb_tec_leng_php(){      return this.formulario.get('fb_tec_leng_php');}
  get fb_tec_leng_node(){      return this.formulario.get('fb_tec_leng_node');}
  get fb_tec_leng_frameworks(){      return this.formulario.get('fb_tec_leng_frameworks');}

  get fb_inf_repo_nombre(){      return this.formulario.get('fb_inf_repo_nombre');}
  get fb_inf_repo_grupo(){      return this.formulario.get('fb_inf_repo_grupo');}

  get fb_inf_info_url(){      return this.formulario.get('fb_inf_info_url');}
  get fb_inf_info_endPoints(){      return this.formulario.get('fb_inf_info_endPoints');}

  get fb_serv_backend(){      return this.formulario.get('fb_serv_backend');}
  get fb_serv_apisExternas(){      return this.formulario.get('fb_serv_apisExternas');}
  get fb_serv_cache(){      return this.formulario.get('fb_serv_cache');}
  get fb_serv_db(){      return this.formulario.get('fb_serv_db');}
  get fb_serv_db_tipo(){      return this.formulario.get('fb_serv_db_tipo');}
  get fb_serv_db_otro(){      return this.formulario.get('fb_serv_db_otro');}
  
  get fb_inf_info_nombre(){      return this.formulario.get('fb_inf_repo_nombre');}


  
  formularioConfiguracion(){
    this.formulario = this.fb.group({
      fb_inf_pr_nombre:        ['', [Validators.required]],
      fb_inf_pr_descripcion:          ['', [Validators.required]],

      fb_tec_leng_java:          ['', [Validators.required]],
      fb_tec_leng_php:          ['', [Validators.required]],
      fb_tec_leng_node:          ['', [Validators.required]],
      fb_tec_leng_frameworks:          ['', []],

      fb_inf_repo_nombre:          ['', [Validators.required]],
      fb_inf_repo_grupo:          ['', [Validators.required]],

      fb_inf_info_url:          ['', [Validators.required]],
      fb_inf_info_endPoints:            ['', [Validators.required]],

      fb_serv_apisExternas:            ['', [Validators.required]],
      fb_serv_backend:            ['', [Validators.required]],
      fb_serv_cache:            ['', [Validators.required]],
      fb_serv_db:            ['', [Validators.required]],
      fb_serv_db_tipo:            ['', [Validators.required]],
      fb_serv_db_otro:            ['', [Validators.required]],

      fb_inf_info_nombre:          ['', [Validators.required]]

    })
  }

  endPointAgregar(endpoint?:any){ 
    console.log('endPointAgregar > ', endpoint);
    this.endPoints.push(true)
  }
  endPointEliminar(endpoint:number){ 
    console.log('endPointEliminar > ', endpoint);
    this.endPoints.splice(endpoint, 1)
  }

  checkSelecciona(valor:boolean, seccion: string){ 
    console.log('checkSelecciona => ', seccion, ' > ', valor);
    this.formSecciones[seccion as keyof typeof this.formSecciones] = valor
  }

  radioSelecciona(valor:string, seccion: string){ 
    console.log('radioSelecciona => ', seccion, ' > ', valor);
    this.formSecciones[seccion as keyof typeof this.formSecciones] = valor
  }

  dbSelecciona(valor: string){ 
    console.log('dbSelecciona => ', valor);
    this.formSecciones.dbsOtro = (valor === "Otro") ? true : false
  }

  eventoCaptura(event: Event, seccion?: string, parametro?: string){
    console.log('eventoCaptura => ', seccion, event);
    const valor: any = event.target
    console.log('eventoCaptura ==> ', seccion, parametro, valor.checked);
    
    if(seccion === 'ambienteDespliegue' && parametro === 'Otros'){
      this.formSecciones.ambienteDespliegueOtro = valor.checked
      console.log('eventoCaptura ° ambienteDespliegue ==> ', this.formSecciones.ambienteDespliegueOtro);
    } else if(seccion === 'tecnoFront'){
      this.formSecciones.tecnoFront = valor.checked
      console.log('eventoCaptura ° tecnoFront ==> ', this.formSecciones.tecnoFront);
    } else if(seccion === 'tecnoBack'){
      this.formSecciones.tecnoBack = valor.checked
      console.log('eventoCaptura ° tecnoBack ==> ', this.formSecciones.tecnoBack);
    }
  }

}
