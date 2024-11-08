/* 
  Autor: Pani
*/

import { Component, OnInit, Input } from '@angular/core';
import { BotonComponent } from './boton.component';

@Component({
  selector: 'DNSISa-com-ele-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent {

  botones: BotonComponent[] = []
  
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
  @Input() config: any = { 
    habilitado: true, icoTamm: 18, esquinasTodas: true
  }
  /* config = {}
    {
      'habilitado',         //  tipo ['boton' || 'botonCompacto' || 'botonIcono' || 'accionDeLista']
      'icoTamm',            // 14 define el size del icono
    }
  */
}
