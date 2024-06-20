import { FormField } from './../../ui-components/form-template/form-template.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';
import { User, UserRole } from 'app/models/user.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // -------------------------------------- VARIABLES -------------------------------------------
  loginForm: FormGroup = new FormGroup({});
  submitLabel: string = 'Se connecter';
  formMaker!: FormField[]



  // --------------------------------------CONSTRUCTOR -------------------------------------------
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar : MatSnackBar,
  ) {

    // FORM GROUP FOR LOGIN PAGE
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    // FORM MAKER TO BE PASSED TO TEMPLATE
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
      .subscribe({next: success => {
        console.log('LOGIN PAGE: login successful: ', success)
        // REDIRIGER UTILISATEUR EN FONCTION DE SON ROLE
        const user = success['user'] as User
        var pathToRedirect = user.role == UserRole.ADMIN? '/admin':
                             user.role == UserRole.CLIENT? '/client/dashboard':
                             user.role == UserRole.AGENT? '/agent/dashboard':
                             ''
            this.router.navigate([pathToRedirect]).catch(er=>{
              console.error('LOGIN PAGE: error navigating to page: ', er)
            })
        // STOCKER INFORMATIONS DE L'UTILISATEUR
        this.authService.globalUser = user
        },
        error: e => {
          console.error('LOGIN PAGE: error login to server: ', e )
          if(e.error.statusCode == 401){
            this.displayError("informations d'identification non valides. Veuillez fournir un email et un mot de passe valide")
          } else {
            this.displayError("Erreur de connexion! Veuillez réessayer plus tard")
          }
        }
    });
    } else {
      this.displayError('Veuillez remplir correctement le formulaire.')
    }

  }


  private  displayError(errorMessage: string){
    if(!errorMessage || errorMessage == '') return
    this.snackBar.open(errorMessage, 'OK', {
      duration: 10000,
    })
  }
}
