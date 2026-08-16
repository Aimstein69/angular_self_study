import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
})
export class PowerPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 800){
      return `${value} chevaux 🐎🐎🐎`
    }
    if (value >= 500){
      return `${value} chevaux 🐎🐎`
    }
    else {
      return `${value} chevaux 🐎`
    }
  }

}