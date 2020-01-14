import { Injectable } from '@angular/core';
import {Car} from '../_models/car';
import {BackendData} from '../_helpers/backend-data';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {URLs} from '../_models/urls';
@Injectable({
  providedIn: 'root'
})
export class CarCarService {
  cars: Car[] = [];

  constructor(private data: BackendData,
              private http: HttpClient) {
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

  getCarFields(){
    return ['carNumber', 'carName', 'comment'];
  }

  postNewCar(car: Car): Observable<Car> {
    // for local use
      this.data.cars.push(car);
      // for remote use
      return this.http.post(URLs.urlAddCar, car) as Observable<Car>;

  }

}
