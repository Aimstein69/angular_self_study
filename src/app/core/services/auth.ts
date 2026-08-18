import { Injectable,signal } from '@angular/core';

interface User {
  username: string;
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root'
})
export class Auth {

  currentUser = signal<User | null>(null);

  constructor() {
    this.restoreUser();
  }

  login(username: string, password: string): boolean {

    if (username === 'admin' && password === '1234') {

      this.currentUser.set({
      username: 'admin',
      role: 'admin'
      });

      localStorage.setItem(
        'user',
        JSON.stringify(this.currentUser())
      );

      return true;
    }

    return false;
  }

  logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem('user');
  }

  restoreUser(): void {
    const user = localStorage.getItem('user');

    if (user) {
      this.currentUser.set (JSON.parse(user));
    }
  }

isLoggedIn(): boolean {
  return this.currentUser() !== null;
}

  isAdmin(): boolean {
    return this.currentUser()?.role === 'admin';
  }
}