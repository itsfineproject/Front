import {Injectable} from '@angular/core';
import {Car} from '../_models/car';
import {BackendData} from '../_helpers/backend-data';

@Injectable({
  providedIn: 'root'
})
export class CarCarService {
  cars: Car[] = [];

  constructor(private data: BackendData) {
  }

  getCarsOfUser(userId) {
    this.cars = [];
    this.data.cars.forEach(car => {
      if (car.usedId == userId) {
        this.cars.push(car);
      }
    });

    console.log(this.cars);
    return this.cars;
  }
}
