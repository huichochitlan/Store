import { Component, OnInit } from '@angular/core';
import { SiderbarService } from '../../services/siderbar.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styles: [
  ]
})
export class LeftSidebarComponent implements OnInit {

  menuItems: any[];

  constructor( private siderbarService: SiderbarService ) { 
    this.menuItems = siderbarService.menu;
    console.log(this.menuItems );
  }

  ngOnInit(): void {
    // console.log('init');
  }

}
