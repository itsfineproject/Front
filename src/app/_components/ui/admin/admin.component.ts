import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userservise: UserService) {

  }

  ngOnInit() {
    this.userservise.getUsers().subscribe(data => {console.log(data)});
  }

}
