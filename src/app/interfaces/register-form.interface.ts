export interface RegisterForm{
    nombre: string;
    apellidos: string;
    email: string;
    contrasena: string;
    contrasena2: string;
    terminos: Boolean;
    id_rol: number;
    id_tipo_registro: number;
    estado: number;
}