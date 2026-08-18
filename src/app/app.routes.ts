
import { Routes } from '@angular/router';
import { ListCar } from './features/components/list-car/list-car';

import { NotFound } from './features/errors/not-found/not-found';
import { CarDetail } from './features/components/car-detail/car-detail';
import { AddCar } from './features/components/add-car/add-car';
import { UpdateCar } from './features/components/update-car/update-car';
import { Login } from './features/auth/login/login';
import { authGuard } from './core/guards/auth-guard';
import { ListGames } from './features/xbox/list-games/list-games';
export const routes: Routes = [
      {
    path: '',
    component: ListCar
  },
  //lazyloading chagrement du composant sur demande
    {
  path: 'demo-parent-enfant',
  loadComponent:()=>
    import('./features/demos/parent-enfant/parent/parent')
  .then (m => m.Parent)
},
{
  path: 'vehicules/:id',
  component:CarDetail,
},
{
  path: 'add-car',
  component:AddCar,
  canActivate: [authGuard],
},
{
  path: 'vehicules/:id/update',
  component: UpdateCar,
  canActivate: [authGuard],
},
{
  path: 'login',
  component: Login,
},
{
  path: 'games',
  component:ListGames
},
    {
    path: '**',
    component: NotFound,
  },
];
