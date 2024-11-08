/* 
  Autor: Pani
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'DNSISa-com-ele-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent  implements OnInit {

  @Input() input: any[] = []
  /* 
    [
      'boton',              //  tipo ['boton' || 'botonCompacto' || 'botonIcono' || 'accionDeLista']
      'boton b_neg',        //  clases secundarias  ['general' || 'positivo' || 'negativo' || 'inhabilitado]
      'bot_ico_cancelar',   //  icono
      'Cancelar',           //  label
      'Botonazo para x'     //  tooltip (en desarrollo)
    ]
  */
  @Input() config: any = { habilitado: true, icoTamm: 18, esquinasTodas: true}
  /* config = {}
    {
      'habilitado',         //  tipo ['boton' || 'botonCompacto' || 'botonIcono' || 'accionDeLista']
      'icoTamm',            // 14 define el size del icono
    }
  */

  //botonValido = false;
  tipo = ''
  clases = ''
  claseGeneral = ''
  claseEspecifica = ''
  claseIcono = ''              //  define el icono del icono... jeje
  //deshabilitado = ''
  icono = false           //  si hay icono
  icoTamm = 18;                 //  define el size del icono
  esquinasClase = '';         //  ESQ2 define si las esquinas son todas las mismas por defecto y si se ps otro vlor lo asign como clase

  constructor() { }

  ngOnInit(): void {
    // this.clases = (this.info[0]) ? 'boton' : 'esconde';
    // console.log(this.info[0]);
    if (this.input[0] ===  'boton' || this.input[0] ===  'botonCompacto' || this.input[0] ===  'botonIcono' || this.input[0] ===  'accionDeLista') {
      // this.botonValido = true;
      // console.log('hay info ' + this.info[0]);
      this.claseGeneral = this.input[0];
      this.claseEspecifica = this.input[1];
      //this.clases = this.claseEspecifica + ' ' + this.claseGeneral;
    } else {
      console.log('no hay info ' + this.input[0]);
    }
    if (this.input[2]) { this.icono = true; this.claseIcono = 'icon-' + this.input[2] }
    this.configuracionInicial(this.config)
  }

  configuracionInicial(infoConf: {}){
    //console.log('configuracionInicial >', infoConf);    console.log('CI >', JSON.stringify(infoConf));
    //let ins = (info)? 'SI' : 'NO'
    //console.log('ins >', ins);
    
    if(infoConf){
      //interface dto { habilitado: boolean, icoTamm: number, esquinasTodas?: boolean}
      //const temp = infoConf as BotonVisualDTO
      //if(temp.icoTamm) this.icoTamm = temp.icoTamm
      //if(temp.esquinasTodas === false) this.esquinasClase = 'ESQ2'
      //if(infoConf['icoTamm']) this.icoTamm= infoConf['icoTamm'] 
    } else {
      this.config = { habilitado: true, icoTamm: 18, esquinasTodas: true}
      this.config['habilitado'] = true
      this.icoTamm = 18
    }

  }

}