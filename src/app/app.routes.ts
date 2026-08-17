import { Routes } from '@angular/router';
import { ListCar } from './features/components/list-car/list-car';

import { NotFound } from './features/errors/not-found/not-found';
import { CarDetail } from './features/components/car-detail/car-detail';
import { AddCar } from './features/components/add-car/add-car';
import { UpdateCar } from './features/components/update-car/update-car';
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
},
{
  path: 'vehicules/:id/update',
  component: UpdateCar,
},
    {
    path: '**',
    component: NotFound,
  },
];
