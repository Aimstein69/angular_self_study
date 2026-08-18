import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../../shared/models/gameModel/game.model';

@Injectable({
  providedIn: 'root'
})
export class Games {
private http = inject(HttpClient);
private apiUrl = 'https://api.sampleapis.com/xbox/games';
getGames() {
    console.log('🌐 Appel de l API :', this.apiUrl);
  return this.http.get<Game[]>(this.apiUrl);
}
}
