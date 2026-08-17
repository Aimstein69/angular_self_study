import { Injectable } from '@angular/core';

interface User {
  username: string;
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root'
})
export class Auth {

  currentUser: User | null = null;

  constructor() {
    this.restoreUser();
  }

  login(username: string, password: string): boolean {

    if (username === 'admin' && password === '1234') {

      this.currentUser = {
        username: 'admin',
        role: 'admin'
      };

      localStorage.setItem(
        'user',
        JSON.stringify(this.currentUser)
      );

      return true;
    }

    return false;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

  restoreUser(): void {
    const user = localStorage.getItem('user');

    if (user) {
      this.currentUser = JSON.parse(user);
    }
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }
}