import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent  {
  public labels1: string[] = ['Download a', 'In-Store a', 'Mail-Order a'];
  public data1 = [
    [350, 450, 100],
  ];
}
