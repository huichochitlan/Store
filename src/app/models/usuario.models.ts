export class Usuario{
    constructor(
        public id: number,
        public origen: string,
        public nombre: string,
        public contrasena?: string,
        public email?: string,
        public img?: string,
        public rol?: number,
        public uid?: string,

    ){}
}