import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service";
import {AuthenticationService} from "../../_services/authentication.service";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-admin',
  templateUrl: './user-cabinet.component.html',
  styleUrls: ['./user-cabinet.component.css']
})
export class UserCabinetComponent implements OnInit {

  public token: string;

  constructor(private userservise: UserService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.userservise.getUsers().subscribe(data => {console.log(data)});

     this.authService.auth();
  }

}
