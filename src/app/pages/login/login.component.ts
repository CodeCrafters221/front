import { FormField } from './../../ui-components/form-template/form-template.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // -------------------------------------- VARIABLES -------------------------------------------
  loginForm: FormGroup = new FormGroup({});
  submitLabel: string = 'Se connecter';
  errorMessage: string | null = null;
  formMaker!: FormField[]



  // --------------------------------------CONSTRUCTOR -------------------------------------------
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this.formMaker = [
      {key: 'email', name: 'Email', label: "example@gmail.com", type: 'email',formControl: this.loginForm?.get('email') as FormControl},
      {key: 'password', name: 'Mot de passe', type: 'password', formControl: this.loginForm?.get('password') as FormControl},
    ]
  }



  // -------------------------------------- NG ON INIT METHOD -------------------------------------------
  ngOnInit(): void { }






  // -------------------------------------- ON SUBMIT METHOD -------------------------------------------

  onSubmit(event: any){
    console.log("LOGIN COMPONENT: value of the form ", event);
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password)
      .subscribe(
        success => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.errorMessage = 'Email ou mot de passe non valide';
        }
      );
    } else {
      this.errorMessage = 'Veuillez remplir correctement le formulaire.';
    }
  }
}

