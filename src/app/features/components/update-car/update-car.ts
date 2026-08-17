import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicules } from '../../../services/vehicules';
import { Car } from '../../../shared/models/carModel/car.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-car',
  imports: [FormsModule],
  templateUrl: './update-car.html',
  styleUrl: './update-car.css',
})
export class UpdateCar {
  route = inject(ActivatedRoute);
  vehiculesService = inject(Vehicules);

  id = Number(this.route.snapshot.paramMap.get('id'));

  car: Car | undefined = this.vehiculesService.getCarById(this.id);
  
  update(): void {
  if (this.car) {
    this.vehiculesService.updateCar(this.car);
  }
}
}
