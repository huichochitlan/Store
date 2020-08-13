import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });
    // this.getUsuarios();
    // const promesa = new Promise( ( resolve, reject )=>{
    //   // console.log('promesa');
    //   if ( false ){
    //     resolve('resolve');

    //   } else {
    //     reject('Algo salio mal');
    //   }
      

    // });
    // promesa.then( (mensaje) =>{
    //   console.log(mensaje);
    // })
    // .catch(  error => console.log('error', error));
    // console.log('fin init');
  }
  getUsuarios(){

    return new Promise( resolve =>{
      fetch('https://reqres.in/api/users')
        .then( respuesta => respuesta.json())
        .then( body => resolve( body.data ));
    });    
  }

}
