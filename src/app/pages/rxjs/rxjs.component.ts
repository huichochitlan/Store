import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent{

  constructor() { 

    const obs$ = new Observable( observer =>{
      let i = -1;

      const intervalo = setInterval( ()=>{
        i++;
        observer.next(i);
        // console.log('tik');
        if (i===4){
          clearInterval(intervalo);
          observer.complete();
        }
        if (i===2){
          // clearInterval(intervalo);
          observer.error('i llego a 2');
        }
      },1000)

    });
    obs$.pipe(
      retry()
    ).subscribe(
      valor => console.log('subs:', valor),
      error => console.log('error:', error),
      () => console.info('obs terminado')
    );
  }

  
}
