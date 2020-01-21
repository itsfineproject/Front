import {Component, OnDestroy, OnInit} from '@angular/core';
import {Car} from '../../../../_models/car';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {CarCarService} from '../../../../_services/car-car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {
  cars: Car[] = [];
  userId;
  subscription: Subscription;
  carsArePresent = false;

  constructor(private carService: CarCarService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.subscription = this.carService.getCarsOfUser(this.userId).subscribe(cars => {
      this.cars = cars as Car[];
      console.log(this.cars);
      if(this.cars.length !== 0) this.carsArePresent = true;
    });
  }

  displayFines(car: Car) {
    this.router.navigate([car.id, 'fines']);
  }

  addCar() {
    this.router.navigate([this.userId, 'newCar']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
