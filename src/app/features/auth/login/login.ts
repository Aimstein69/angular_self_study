import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  auth = inject(Auth);
  router = inject(Router);

  username: string = '';
  password: string = '';

  errorMessage: string = '';

  login(): void {

    const success = this.auth.login(
      this.username,
      this.password
    );

    if (success) {
      console.log('Connexion réussie');
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Identifiants incorrects';
    }
  }
}