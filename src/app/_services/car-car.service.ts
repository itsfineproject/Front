import {Injectable} from '@angular/core';
import {Car} from '../_models/car';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {URLs} from '../_models/urls';
import {filter, map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CarCarService {
  numberOfCars = 10;
 constructor(private db: AngularFirestore) {
 }

  getCarsOfUser(userId) {
    return this.db.collection('cars').valueChanges().pipe(
    map((cars: Car[]) => {
      this.numberOfCars = cars.length;
      const items = cars.filter(car => car.userId == userId);
      return items;
    }));
  }

  postNewCar(carToSend) {
   return this.db.collection('cars')
    .add({...new Car((++this.numberOfCars), carToSend.userId, carToSend.carNumber, carToSend.carName, carToSend.carPassportNumber, carToSend.comment)})
     .then(smth => {
       console.log(this.numberOfCars);
      this.db.collection('cars').doc(smth.id).update({id: this.numberOfCars});})
  }
//for Json-Server

//   constructor(private http: HttpClient) {
//   }
//
//   getCarsOfUser(userId) {
//     return this.http.get(URLs.urlCarsGetByUser).pipe(
//     map((cars: Car[]) => {
//       console.log(cars);
//       const items = cars.filter(car => car.userId == userId);
//       return items;
//     }));
//   }
//
  //
//   postNewCar(car: Car) {
//     return this.http.post(URLs.urlCarsAddNew, car).pipe(map(cars => console.log(cars)));
//   }

getCarFields() {
  return [
    {ind: 'carNumber',
     name: 'Car Number',
     err: 'Car number should be of type XX-XXX-XX or XXX-XX-XXX (only digits)'},
       {ind: 'carName',
        name: 'Car Name',
        err: 'Car name shouldn`t be empty and must contain only letters, digits, spaces or "-"'},
        {ind: 'carPassportNumber',
        name: 'Car Passport Number',
        err: 'Car passport number should contain only digits and "-"'},
       {ind: 'comment',
        name: 'Comment',
        err: ''}
    ];
    }


}
