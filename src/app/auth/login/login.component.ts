import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  
  constructor( private router: Router) { }

  
  ngOnInit(): void {
    
  }
  
  login(){
    this.router.navigateByUrl('/');
  }

}
