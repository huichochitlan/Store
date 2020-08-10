import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';



@NgModule({
  declarations: [ 
    ContentHeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    NavbarComponent,
    RightSidebarComponent,
  ],
  exports:[
    ContentHeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    NavbarComponent,
    RightSidebarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
