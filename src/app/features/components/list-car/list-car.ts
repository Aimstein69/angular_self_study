import { Component, inject } from '@angular/core';
import { Vehicules } from '../../../services/vehicules';
import { Car } from '../../../shared/models/carModel/car.model';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { PowerPipe } from '../../../shared/pipes/power-pipe';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-list-car',
  imports: [FormsModule,CurrencyPipe,PowerPipe, RouterLink],
  templateUrl: './list-car.html',
  styleUrl: './list-car.css',
})
export class ListCar {
  vehiculesService = inject(Vehicules);
  cars = this.vehiculesService.getCars();
  puissancePlus(car:Car):void{
    car.puissance +=10;
  }
  auth = inject(Auth)
}

