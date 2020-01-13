import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css']
})
export class AddCarFormComponent implements OnInit {

  newCarFG;
  constructor() { }

  ngOnInit() {
    this.newCarFG = new FormGroup({

    })
  }

}
