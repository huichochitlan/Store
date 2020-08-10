import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContentHeaderComponent } from './shared/content-header/content-header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LeftSidebarComponent } from './shared/left-sidebar/left-sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RightSidebarComponent } from './shared/right-sidebar/right-sidebar.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    DashboardComponent,
    ContentHeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    NavbarComponent,
    RightSidebarComponent,
    ProgressComponent,
    GraficaComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
