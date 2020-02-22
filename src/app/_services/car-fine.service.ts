import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fine} from '../_models/fine';
import {filter, map, tap} from 'rxjs/operators';
import {URLs} from '../_models/urls';
import {AngularFirestore} from '@angular/fire/firestore';
import {Car} from '../_models/car';
import {Observable, Subscription} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarFineService {

  parkings = [];
  fines = [];

  constructor(private db: AngularFirestore) {
  }

  getFinesWithoutAddress(carId) {
    return this.db.collection('fines').valueChanges().pipe(
      map((fines: Fine[]) => {
        console.log(fines);
        const items = fines.filter(fine => fine.carId == carId);
        this.fines = items;
        return items;
      }));
  }

  getAddresses(carId) {
    return this.db.collection('parkings').valueChanges().pipe(map(parkings => {
      this.parkings = parkings;
      console.log(parkings);
      this.setAddressesOfFines(this.fines);
      return this.fines;
    }));
  }

  setAddressesOfFines(fines) {
    fines.forEach(fine => {
      const parkingGot = this.parkings.find(parking => parking.id == fine.parkingId);
      fine.parkingAddress = parkingGot.address;
    });
  }

  //for Json-server
  // getFinesOfCar(carId) {
  //   return this.http.get(URLs.urlFinesGetByCar).pipe(
  //     map((fines: Fine[]) => {
  //       // console.log(fines);
  //       const items: Fine[] = fines.filter(fine => fine.carId == carId);
  //       // console.log(items);
  //       items.forEach(fine => {
  //         this.getParkingAddress(fine.parkingId).subscribe(parking => fine.parkingAddress = parking.address);
  //       });
  //       console.log(items);
  //       return items;
  //     }));
  // }

  // setFinePaid(fine: Fine) {
  //   if (fine.isPaid === true) {
  //     return this.http.put(URLs.urlFinesSetPaid, fine).pipe(map(fines => console.log(fines)));
  //   }
  // }

  // getParkingAddress(parkingId: number) {
  //   return this.http.get(URLs.urlParkings).pipe(
  //     map((parkings: any) => {
  //       const items = parkings.filter(parking => parking.id == parkingId);
  //       // console.log(items);
  //       return items[0];
  //     }));
  // }
}
