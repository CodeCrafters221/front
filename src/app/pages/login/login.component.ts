import { FormField } from './../../ui-components/form-template/form-template.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { User, UserRole } from 'app/models/user.interface';
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
<<<<<<< Updated upstream
  formMaker!: FormField[]
=======
  errorMessage: string | null = null;
  hide: boolean = true;
>>>>>>> Stashed changes



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
<<<<<<< Updated upstream
      {key: 'email', name: 'Email', label: "example@gmail.com", type: 'email',formControl: this.loginForm?.get('email') as FormControl},
      {key: 'password', name: 'Mot de passe', type: 'password', formControl: this.loginForm?.get('password') as FormControl},
    ]
=======
      { 
        key: 'role', name: 'Rôle', type: 'select', label: "Quel est votre rôle", formControl: this.role as FormControl, 
        options: [
          { optionName: 'Admin', value: 'ADMIN' },
          { optionName: 'Agent Microfinance', value: 'AGENT_MICROFINANCE' },
          { optionName: 'Client', value: 'CLIENT' }
        ] 
      },
      { key: 'email', name: 'Email', label: "example@gmail.com", type: 'email', formControl: this.email as FormControl },
      { key: 'password', name: 'Mot de passe', type: 'password', formControl: this.password as FormControl }
    ];
>>>>>>> Stashed changes
  }



  // -------------------------------------- NG ON INIT METHOD -------------------------------------------
  ngOnInit(): void { }

<<<<<<< Updated upstream





  // -------------------------------------- ON SUBMIT METHOD -------------------------------------------
  onSubmit(event: any){
    console.log("LOGIN COMPONENT: value of the form ", event);
=======
  get role() { return this.loginForm.get('role'); }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(): void {
>>>>>>> Stashed changes
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password)
      .subscribe({next: success => {
        console.log('LOGIN PAGE: login successful: ', success)
        // REDIRIGER UTILISATEUR EN FONCTION DE SON ROLE
        const user = success['user'] as User
        var pathToRedirect = user.role == UserRole.ADMIN? '/admin':
                             user.role == UserRole.CLIENT? '/client':
                             user.role == UserRole.AGENT? '/agent':
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
<<<<<<< Updated upstream

  }


  private  displayError(errorMessage: string){
    if(!errorMessage || errorMessage == '') return
    this.snackBar.open(errorMessage, 'OK', {
      duration: 10000,
    })
=======
  }
}

export class Login {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
>>>>>>> Stashed changes
  }
}

