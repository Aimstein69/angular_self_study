import { Component, inject } from '@angular/core';

import { Games } from '../../../core/services/games';

import { Game } from '../../../shared/models/gameModel/game.model';

@Component({
  selector: 'app-list-games',
  imports: [],
  templateUrl: './list-games.html',
  styleUrl: './list-games.css',
})
export class ListGames {

  gamesService = inject(Games);

  games: Game[] = [];
  currentPage =1;
  pageSize = 20;
  get paginatedGames(): Game[]{
    const start = (this.currentPage -1)* this.pageSize;
    const end = start + this.pageSize;
    return this.games.slice(start,end);
  }
  get totalPages(): number{
    return Math.ceil(this.games.length / this.pageSize);
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  ngOnInit(): void {

    console.log('🚀 ListGames démarré');

    this.gamesService.getGames().subscribe({

      next: (games) => {
        console.log('✅ Données reçues :', games);
        console.log('🎮 Premier jeu :', games[0]);

        this.games = games;
      },

      error: (error) => {
        console.error('❌ Erreur API :', error);
      },

      complete: () => {
        console.log('🏁 Requête terminée');
      }

    });

  }
}