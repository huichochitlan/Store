import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  public formSubmitted = false;

  public frmRegistro = this.formBuilder.group({
    nombre:['Jose', Validators.required],
    email:['test@gmail.com', [Validators.required, Validators.email]],
    contrasena:['', Validators.required],
    apellidos:['asd', Validators.required],
    contrasena2:['', Validators.required],
    terminos:[false, Validators.required],

  },{
    validators: this.contrasenasIguales('contrasena','contrasena2')
  });

  constructor( private formBuilder: FormBuilder, private usuarioService: UsuarioService ) { }

  crearUsuario(){
    this.formSubmitted = true;
    console.log(this.frmRegistro.value);
    if ( this.frmRegistro.invalid ) {
      return;
      // console.log('envio de datos');

    }
    this.usuarioService.crearUsuario(this.frmRegistro.value)
    .subscribe( respuesta => {
      console.log('usuario creado')
      console.log(respuesta)
    }, (error) => console.warn(error) )
  }
  campoNoValido( campo:string ): boolean{
    if ( this.frmRegistro.get(campo).invalid && this.formSubmitted){
      return true;

    } else {
      return false;
    }
  }
  aceptaTerminos(){
    return !this.frmRegistro.get('terminos').value && this.formSubmitted;
  }
  validarContrasena(){
    const contra1 = this.frmRegistro.get('contrasena').value;
    const contra2 = this.frmRegistro.get('contrasena2').value;
    if ( contra1 === contra2 && this.formSubmitted){
      return true;
    }

  }
  contrasenasIguales(contra1: string, contra2: string){
    return ( formGroup: FormGroup ) => {
      const contrasena1 = formGroup.get(contra1);
      const contrasena2 = formGroup.get(contra2);
      if  ( contrasena1.value === contrasena2.value ){
        contrasena2.setErrors(null)
      } else {
        contrasena2.setErrors({noEsIgual:true})

      }

    }

  }
}
