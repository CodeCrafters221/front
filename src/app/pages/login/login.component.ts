import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login: Login ;

  constructor(){
    this.login = new Login() ;
  }
  

}



export class Login {
  email: string ;
  password: string ;

  constructor(){
    this.email = '' ;
    this.password = '' ;
  }
}
