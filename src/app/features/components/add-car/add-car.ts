import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../../shared/models/carModel/car.model';
import { Vehicules } from '../../../services/vehicules';

@Component({
  selector: 'app-add-car',
  imports: [FormsModule],
  templateUrl: './add-car.html',
  styleUrl: './add-car.css',
})
export class AddCar {
  vehiculesService = inject(Vehicules);

  id: number = 0;
  marque: string = '';
  price: number = 0;
  puissance: number = 0;
  color: string = '';
  imageUrl: string = '';
  errorMessage: string = '';

  // rassembler les variables en un objet
  creerCar(): Car | undefined {
    this.errorMessage = '';
    if (this.vehiculesService.idExists(this.id)) {
    this.errorMessage = 'Cet ID existe déjà !';
    return;
    }

    const car: Car = {
      id: this.id,
      marque: this.marque,
      color: this.color,
      puissance: this.puissance,
      price: this.price,
      imageUrl: this.imageUrl
    };
    this.vehiculesService.addCar(car);
    this.id = 0;
    this.marque = '';
    this.price = 0;
    this.puissance = 0;
    this.color = '';
    this.imageUrl = '';
    console.log(car);

    return car;
  }

}