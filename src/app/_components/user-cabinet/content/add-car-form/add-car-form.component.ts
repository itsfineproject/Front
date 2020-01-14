import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../../../_models/car';
import {CarCarService} from '../../../../_services/car-car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Patterns} from '../../../../_models/patterns';
import {ErrorMatcher} from '../../../../_models/error-matcher';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css']
})
export class AddCarFormComponent implements OnInit {
  newCarFG;
  newCar: Car;
  fields = [];
  matcher = new ErrorMatcher();

  constructor(private carService: CarCarService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.newCarFG = new FormGroup({
      carNumber: new FormControl(this.newCar.carNumber, [Validators.required, Patterns.carNumberPattern]),
      carName: new FormControl(this.newCar.carName, [Validators.required, Patterns.namePattern]),
      comment: new FormControl(this.newCar.comment)
    });
    this.fields = this.carService.getCarFields();
    this.newCar.usedId = this.route.snapshot.params['id'];
  }

  sendData() {
    if (this.newCarFG.invalid) {
      return;
    }

    const carToSend = this.newCarFG.value;
    // contactToSend.id = this.mode === 'add' ? 0 : this.contact.id;
    this.carService.postNewCar(this.newCar).subscribe((res) => {
      console.log(res);

    });

    this.correctSubscription = this.correctObservable
      .subscribe((res) => {
        console.log(res);
        this.applicationService.getAll();
        this.dataSubscription = this.dataService.dataSubject
          .subscribe(() => {
              this.router.navigate(['phonebook']);
            },
            (err) => console.log(err)
          );
      });
  }

  exit() {
    this.router.navigate([this.newCar.usedId, 'cars']);
  }
}
