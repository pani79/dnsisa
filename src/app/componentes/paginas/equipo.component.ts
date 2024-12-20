/*
Autor: Pani
*/


import { Component } from '@angular/core';

//  Modelos
import { EquipoMiembro } from 'src/app/modelos/ta/equipoMiembro';

//  Datos
import { EQUIPO, DIRECCIONES, DIRECCION_FUNCIONES, DIRECCION_FUNCIONES_AGRUPADAS } from 'src/app/info/tasAuxiliares';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})


export class EquipoComponent {

  equipo: EquipoMiembro[] = []
  equipoSeleccionado: number[] = []
  
  direcciones: any[] = []
  direccionFunciones: string[] = []
  direccionFuncionesAgrupadas: any[] = []
  funcionesSeleccionadas: boolean[] = []

  busquedaTipos: any[] = [
    {id: 'DIRECCION', nombre: 'Direcciones'},
    {id: 'FUNCION', nombre: 'Funciones y tareas'},
    {id: 'APELLIDO', nombre: 'Apellido'}
    //,{id: 'NOMBRE', nombre: 'Nombre'}
  ]
  busquedaFiltro = { tipo: '', valor: '' as any}

  
  constructor() {
    
    /* */ 
    DIRECCIONES.forEach(direccion => {
      const dir = direccion as any[]
      const dire = {id: dir[0], sigla: dir[1], nombre: dir[2]}
      this.direcciones[dire.id] = dire		
    });
    DIRECCION_FUNCIONES.forEach(funcion => {
      this.direccionFunciones.push(funcion)	
      this.funcionesSeleccionadas.push(false)
    });
    DIRECCION_FUNCIONES_AGRUPADAS.forEach(funcion => {
      this.direccionFuncionesAgrupadas.push(funcion)	
    });

    //this.direcciones = DIRECCIONES
    EQUIPO.forEach(equipo => {
      const eq = equipo as any[]
      const miembro = new EquipoMiembro(eq[1], eq[2], eq[3], eq[4], eq[5], eq[6], eq[7]);
      this.equipo.push(miembro);	
    });

  }

  buscadorDefine(tipo: string){
    console.log('buscadorDefine => '+ tipo);
    this.busquedaFiltro.tipo = tipo
  }

  

  equipoFiltra(tipo: string, valor?: any){
    console.log('equipoFiltra => '+ tipo + ' | '  + valor);
    
    this.equipoSeleccionado = []

    const filtraDireccion = (identificadorDireccion: number) => {
      console.log('equipoFiltra => vamos a filtrar la DIRECCION | '  + valor);
      this.equipo.forEach(
        (miembro, index) => {
          if(miembro.direccion === valor){ this.equipoSeleccionado.push(index); }
        }
      )
    }

    const filtraFuncion = (identificadorFuncion: number) => {
      console.log('equipoFiltra => vamos a filtrar la FUNCION | '  + valor);
      console.log('equipoFiltra => '  +this.direccionFunciones[identificadorFuncion] +  ' ° '  + this.funcionesSeleccionadas[identificadorFuncion]);
      
      this.funcionesSeleccionadas[identificadorFuncion] = (this.funcionesSeleccionadas[identificadorFuncion]) ? false : true
      let seleccionadas : number[] = []
      const corroboraFuncion = (miembro: EquipoMiembro, funciones: number[]): boolean => {
        let resultado = true
        funciones.forEach(funcionIndex => {
          if(!miembro.funciones.includes(funcionIndex)) resultado = false
        })
        return resultado
      }

      this.funcionesSeleccionadas.forEach((fnc, index) => {
        if(fnc) seleccionadas.push(index)
      })

      console.log('equipoFiltra =>  | seleccionadas.length'  + seleccionadas.length);
      if(seleccionadas.length === 0 ) return

      this.equipo.forEach(
        (miembro, index) => {
          // (miembro.funciones.indexOf(identificadorFuncion) >= 0)
          if(corroboraFuncion(miembro, seleccionadas)){ this.equipoSeleccionado.push(index); }
        }
      )
    }

    const filtraApellido = (eventoAellido: Event) => {
      const apellido = (eventoAellido.target as HTMLInputElement).value.toLowerCase()
      console.log('equipoFiltra => vamos a filtrar la APELLIDO');
      if(apellido.length < 3) return      
      console.log('equipoFiltra => vamos a filtrar la APELLIDO | '  + apellido);
      this.equipo.forEach(
        (miembro, index) => {
          console.log('equipoFiltra =>  APELLIDO | '  + apellido + ' | ' + miembro.apellido);
          if(miembro.apellido.toLowerCase().includes(apellido)){ this.equipoSeleccionado.push(index); }
        }
      )
    }

    (tipo === 'DIRECCION') ? filtraDireccion(valor!) : 
    (tipo === 'FUNCION') ? filtraFuncion(valor!): 
    (tipo === 'APELLIDO') ? filtraApellido(valor) : console.log('equipoFiltra => ERROR : '+ tipo);
    
    //this.equipoSeleccionado = this.equipo
  }

}
