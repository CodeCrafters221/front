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

  loginForm: FormGroup;
  formMaker: any[];
  submitLabel: string = 'Se connecter';
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.loginForm = new FormGroup({
      role: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    this.formMaker = [
      { key: 'role', name: 'Rôle', type: 'select', label: "Quel est votre rôle", formControl: this.role as FormControl, 
        options: [
          { optionName: 'Admin', value: 'ADMIN' },
          { optionName: 'Agent Microfinance', value: 'AGENT_MICROFINANCE' },
          { optionName: 'Client', value: 'CLIENT' }
        ] 
      },
      { key: 'email', name: 'Email', label: "example@gmail.com", type: 'email', formControl: this.email as FormControl },
      { key: 'password', name: 'Mot de passe', type: 'password', formControl: this.password as FormControl }
    ];
  }

  ngOnInit(): void { }

  get role() { return this.loginForm.get('role'); }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
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
