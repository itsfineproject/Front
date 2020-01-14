import {Injectable} from '@angular/core';
import {User} from '../_models/user';
import {Role} from '../_models/role.enum';
import {Car} from '../_models/car';
import {Fine} from '../_models/fine';

@Injectable({
  providedIn: 'root'
})

export class BackendData {
  token: string = '[{ "token": "hertebeanetoken" }]';

  users: User[] = [
    {
      'name': 'John',
      'id': 666,
      'email': 'rr@rr.rr',
      'password': '123',
      'role': Role.Admin,
      'token': 'dsfsdfsdfsdfsdf'
    },
    {
      'name': 'Ron',
      'id': 55,
      'email': 'rr@rr.rr',
      'password': '123',
      'role': Role.Admin,
      'token': 'dsfsdfsdfsdfsdf'
    },
    {
      'name': 'Ron1',
      'id': 345,
      'email': 'rr@rr.rr',
      'password': '123',
      'role': Role.Admin,
      'token': 'dsfsdfsdfsdfsdf'
    },
    {
      'name': 'Ron2',
      'id': 645654,
      'email': 'rr@rr.rr',
      'password': '123',
      'role': Role.Admin,
      'token': 'dsfsdfsdfsdfsdf'
    }
  ];

  cars: Car[] = [
    {
      'id': 1,
      'usedId': 1,
      'carNumber': '645654'
    },
    {
      'id': 2,
      'usedId': 1,
      'carNumber': '645654'
    },
    {
      'id': 3,
      'usedId': 2,
      'carNumber': '645654'
    },
    {
      'id': 4,
      'usedId': 3,
      'carNumber': '645654'
    },
    {
      'id': 5,
      'usedId': 4,
      'carNumber': '645654'
    },
    {
      'id': 6,
      'usedId': 5,
      'carNumber': '645654'
    },
    {
      'id': 7,
      'usedId': 6,
      'carNumber': '645654'
    },
    {
      'id': 8,
      'usedId': 7,
      'carNumber': '645654'
    }
  ];

  fines: Fine[] = [
    {
      'id': 1,
      'carId': 1,
      'sum': 100,
      'dateTime': '01.01.1991',
      'parkingId': 1
    }
  ];
}
