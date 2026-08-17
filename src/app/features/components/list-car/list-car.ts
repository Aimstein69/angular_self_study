import { Component, inject } from '@angular/core';
import { Vehicules } from '../../../services/vehicules';
import { Car } from '../../../shared/models/carModel/car.model';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { PowerPipe } from '../../../shared/pipes/power-pipe';

@Component({
  selector: 'app-list-car',
  imports: [FormsModule,CurrencyPipe,PowerPipe],
  templateUrl: './list-car.html',
  styleUrl: './list-car.css',
})
export class ListCar {
  vehiculesService = inject(Vehicules);
  cars = this.vehiculesService.getCars();
  puissancePlus(car:Car):void{
    car.puissance +=10;
  }
}

