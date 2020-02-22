import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../_services/authentication.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [
    trigger('logScreen', [
      state('closed', style({
        'background-color': 'red',
        transform: 'translateX(0)',
      })),
      state('opened', style({
        'background-color': 'gray',
        transform: 'translateX(-128px) scaleX(12)'
      })),
      transition('closed <=> opened', animate(300)),
    ])
  ]
})
export class AuthComponent implements OnInit {

  // state = 'closed';
  loginForm = new FormGroup({
    mail: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  //
  //
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  //
  // onClick() {
  //   this.state === 'closed' ? this.state = 'opened' : this.state = 'closed';
  // }
  //
  onSubmit() {
    // let authOps: Observable<string>;


  }

    // Making login request to server
    // authOps = this.authService.login(this.loginForm.value)
    // .
    // .
    // .
    // .
  // }

}
