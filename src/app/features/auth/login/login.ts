import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  auth = inject(Auth);

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
    } else {
      this.errorMessage = 'Identifiants incorrects';
    }
  }
}