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

  formMaker : FormField[] = [
    {key: 'role', name: 'Rôle', type: 'select',formControlname: this.role as FormControl, options: ['CLIENT', 'ADMIN', 'AGENT_MICROFINANCE']},
    {key: 'email', name: 'Email', type: 'email',formControlname: this.email as FormControl},
    {key: 'password', name: 'Mot de passe', type: 'password', formControlname: this.password as FormControl},
  ]

  login: Login ;
  hide: boolean = true 
  constructor(){
    this.login = new Login() ;
  }

}


export interface FormField {
  key: string,
  name: string,
  type?: string,
  formControlname: FormControl,
  options?: any[],
}



export class Login {
  email: string ;
  password: string ;

  constructor(){
    this.email = '' ;
    this.password = '' ;
  }
}
