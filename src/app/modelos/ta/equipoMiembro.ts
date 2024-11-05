/*
Autor: Pani
*/



export class EquipoMiembro {

    constructor(
        public nombre: string,
        public apellido: string,
        public direccion: number,
        public funciones: number[],
        public descripcion: string,
        public imagen: string,
        public habilitado: boolean,
		public id?: number
    ){}
}

/* 
'Florencia Alegre',
    1,
    2,
    'Responsable de Capacitacion / Flor es Flor',
    'https://i.pinimg.com/originals/eb/01/a8/eb01a8e5b2fcc1b6ddea4a8ae4dd5b64.jpg' 
*/