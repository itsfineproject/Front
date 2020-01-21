import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fine} from '../_models/fine';
import {map} from 'rxjs/operators';
import {URLs} from '../_models/urls';

@Injectable({
  providedIn: 'root'
})
export class CarFineService {

  constructor(private http: HttpClient) {
  }

  getFinesOfCar(carId) {
    return this.http.get(URLs.urlFinesGetByCar).pipe(
      map((fines: Fine[]) => {
        // console.log(fines);
        const items: Fine[] = fines.filter(fine => fine.carId == carId);
        // console.log(items);
        items.forEach(fine => {
          this.getParkingAddress(fine.parkingId).subscribe(parking => fine.parkingAddress = parking.address);
        });
        console.log(items);
        return items;
      }));
  }

  setFinePaid(fine: Fine) {
    if (fine.isPaid === true) {
      return this.http.put(URLs.urlFinesSetPaid, fine).pipe(map(fines => console.log(fines)));
    }
  }

  getParkingAddress(parkingId: number) {
    return this.http.get(URLs.urlParkings).pipe(
      map((parkings: any) => {
        const items = parkings.filter(parking => parking.id == parkingId);
        // console.log(items);
        return items[0];
      }));
  }
}
