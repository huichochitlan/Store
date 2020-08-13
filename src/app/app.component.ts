import { Component,OnInit } from '@angular/core';
declare function admin();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'store';
  
  ngOnInit(): void {
    console.log('asdf');
    admin();
  }

}
