import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get role() { return this.loginForm.get('role'); }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  formMaker : any[] = [
    {key: 'role', name: 'Rôle', type: 'select', label: "Quel est votre rôle", formControl: this.role as FormControl, 
    options: [ {optionName: 'Admin', value: 'ADMIN'}, {optionName: 'Agent Microfinance', value: 'AGENT_MICROFINANCE'}, {optionName: 'Client', value: 'CLIENT'} ]},
    {key: 'email', name: 'Email', label: "example@gmail.com", type: 'email',formControl: this.email as FormControl},
    {key: 'password', name: 'Mot de passe', type: 'password', formControl: this.password as FormControl},
  ]

  login: Login ;
  hide: boolean = true 
  constructor(){
    this.login = new Login() ;
  }





  onSubmit(event: any){
    console.log("LOGIN COMPONENT: value of the form ", event);
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