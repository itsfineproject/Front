import {Component, OnInit} from '@angular/core';
import {User} from '../../../../_models/user';
import {UserService} from '../../../../_services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  fields = ['firstName', 'lastName', 'teudatZeut', 'email', 'password'];
  editMode = {
    firstName: false,
    lastName: false,
    teudatZeut: false,
    email: false,
    password: false
  };
  fieldNames = {
    firstName: 'First Name',
    lastName: 'Last Name',
    teudatZeut: 'Personal ID',
    email: 'E-mail',
    password: 'Password'
  };
  subscription: Subscription;
  user: User = new User('', '', 0, '', '');
  randomPhoto: string;
  private randomnumber: number = Math.round(Math.random() * 100);
  corporate: string;


  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user.id = this.route.snapshot.params['id'];
    console.log(this.user.id);
    this.subscription = this.userService.getUser(this.user.id)
      .subscribe(users => {
      console.log(users);
      this.user = users[0];
    });
    console.log(this.user);
    this.randomPhoto = 'https://randomuser.me/api/portraits/men/' + this.randomnumber + '.jpg';
  }

  toEdit(field: string) {
    this.editMode[field] = true;
  }

  setNewData(field: string) {
    this.editMode[field] = false;
  }
}
