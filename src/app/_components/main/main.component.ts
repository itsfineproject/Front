import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showPage;

  constructor() { }

  ngOnInit() {
    this.showPage = 'home';
  }

}
