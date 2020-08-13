import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {
  menu: any[] = [
    { 
      titulo: 'Dashboard',
      icono: '',
      submenu:[
        // { titulo: 'Menu', url: '/' },
        { titulo: 'Grafica', url: 'progress' },
        { titulo: 'Progres', url: 'grafica' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'Rxjs', url: 'rxjs' },
      ]

    }
  ]
  constructor() { 
    // console.log('dentro del constructor');
  }
}
