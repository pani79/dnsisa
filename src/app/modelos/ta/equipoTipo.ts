/*
Autor: Pani
*/



export class EquipoTipo {
    constructor(
        public nombre: string,
        public apellido: string,
        public direccion: number,
        public funciones: string,
        public comentarios: string,
        public usuarioAsignado: number,
        public usuarioCreador: number,
        public estado: number,
        public habilitado: boolean,
		public id?: number
    ){}
}
