import { Routes } from '@angular/router';
import { ListCar } from './features/components/list-car/list-car';

import { NotFound } from './features/errors/not-found/not-found';
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
    path: '**',
    component: NotFound,
  },
];
