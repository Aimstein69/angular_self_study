import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicules } from '../../../services/vehicules';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  imports: [CurrencyPipe],
  templateUrl: './car-detail.html',
  styleUrl: './car-detail.css',
})
export class CarDetail {
  route = inject(ActivatedRoute)
  vehiculesService = inject(Vehicules)
  id = Number(this.route.snapshot.paramMap.get('id'));
  car = this.vehiculesService.getCarById(this.id);
}
