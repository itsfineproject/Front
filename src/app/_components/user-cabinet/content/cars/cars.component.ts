import { Component, OnInit } from '@angular/core';
import {Car} from '../../../../_models/car';
import {CarCarService} from '../../../../_services/car-car.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  userId;

  constructor(private carService: CarCarService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.cars = this.carService.getCarsOfUser(this.userId);
  }

  displayCar(car: Car) {
    this.router.navigate(['car', car.carNumber]);
  }

  addCar() {
    this.router.navigate([this.userId, 'newCar']);
  }
}
