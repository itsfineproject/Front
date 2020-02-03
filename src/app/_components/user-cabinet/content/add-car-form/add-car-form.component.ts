import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../../../_models/car';
import {CarCarService} from '../../../../_services/car-car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Patterns} from '../../../../_models/patterns';
import {ErrorMatcher} from '../../../../_models/error-matcher';
import {Observable, Subscription} from 'rxjs';
import {BackendData} from '../../../../_helpers/backend-data';
import {ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCarFormComponent implements OnInit, OnDestroy {

  newCarFG;
  newCar: Car = new Car(0, 0, '', '',  '', '');
  fields = []
  matcher = new ErrorMatcher();
  subscription: Subscription;

  constructor(private carService: CarCarService,
              private route: ActivatedRoute,
              private router: Router,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.newCarFG = new FormGroup({
      carNumber: new FormControl(this.newCar.carNumber, [Validators.required, Patterns.carNumberPattern]),
      carName: new FormControl(this.newCar.carName, [Validators.required, Patterns.namePattern]),
      carPassportNumber: new FormControl(this.newCar.carPassportNumber, [Validators.required, Patterns.passportNumberPattern]),
      comment: new FormControl(this.newCar.comment)
    });
    this.newCar.userId = this.route.snapshot.params['id'];
    this.fields = this.carService.getCarFields();
    console.log(this.fields);
    this.cdRef.detectChanges();
  }

  sendData() {
    if (this.newCarFG.invalid) {
      return;
    }

    const carToSend = this.newCarFG.value;
    carToSend.userId = this.newCar.userId;
    console.log(carToSend);
    this.subscription = this.carService.postNewCar(carToSend).subscribe((res) => {
        console.log(res);
        this.router.navigate([this.newCar.userId, 'cars']);
      },
      (err) => {
        console.log(err);
        this.matcher = err;
      }
    );
  }

  exit() {
    this.router.navigate([this.newCar.userId, 'cars']);
  }

  clean(){
    this.newCar =new Car(0, this.newCar.userId, '', '',  '', '');
    this.newCarFG.reset();
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe();
  }
}
