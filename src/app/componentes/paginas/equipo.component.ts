/*
Autor: Pani
*/


import { Component } from '@angular/core';

//  Modelos
import { EquipoMiembro } from 'src/app/modelos/ta/equipoMiembro';

//  Datos
import { EQUIPO, DIRECCIONES, DIRECCION_FUNCIONES } from 'src/app/info/tasAuxiliares';

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
  
  constructor() {
    
    /* */ 
    DIRECCIONES.forEach(direccion => {
      const dir = direccion as any[]
      const dire = {id: dir[0], sigla: dir[1], nombre: dir[2]}
      this.direcciones[dire.id] = dire		
    });
    DIRECCION_FUNCIONES.forEach(funcion => {
      this.direccionFunciones.push(funcion)	
    });

    //this.direcciones = DIRECCIONES
    EQUIPO.forEach(equipo => {
      const eq = equipo as any[]
      const miembro = new EquipoMiembro(eq[1], eq[2], eq[3], eq[4], eq[5], eq[6], eq[7]);
      this.equipo.push(miembro);	
    });

  }

  equipoFiltra(valor: number, tipo?: string){
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

    (tipo === 'DIRECCION') ? filtraDireccion(valor) : console.log('equipoFiltra => ERROR : '+ tipo);
    
    //this.equipoSeleccionado = this.equipo
  }

}
