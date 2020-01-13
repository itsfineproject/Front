import {Injectable} from '@angular/core';
import {User} from '../_models/user';
import {Role} from '../_models/role.enum';
import {Car} from '../_models/car';
import {Fine} from '../_models/fine';

@Injectable({
  providedIn: 'root'
})

export class BackendData {
  token = '[{ "token": "hertebeanetoken" }]';

  users: User[] = [
    {
      name: 'John',
      id: 666,
      email: 'rr@rr.rr',
      password: '123',
      role: Role.Admin,
      token: 'dsfsdfsdfsdfsdf'
    },
    {
      name: 'Ron',
      id: 55,
      email: 'rr@rr.rr',
      password: '123',
      role: Role.Admin,
      token: 'dsfsdfsdfsdfsdf'
    },
    {
      name: 'Ron1',
      id: 345,
      email: 'rr@rr.rr',
      password: '123',
      role: Role.Admin,
      token: 'dsfsdfsdfsdfsdf'
    },
    {
      name: 'Ron2',
      id: 645654,
      email: 'rr@rr.rr',
      password: '123',
      role: Role.Admin,
      token: 'dsfsdfsdfsdfsdf'
    }
  ];

  cars: Car[] = [
    {
      id: 1,
      usedId: 1,
      carNumber: '64-560-54',
      carName: 'Kia Spectra',
      comment: 'My favourite car'
    },
    {
      id: 2,
      usedId: 1,
      carNumber: '645-65-400',
      carName: 'Ford Fiesta',
      comment: 'Red one'
    },
    {
      id: 3,
      usedId: 1,
      carNumber: '64-565-40',
      carName: 'Hyundai C3',
      comment: 'My best car'
    },
    {
      id: 4,
      usedId: 3,
      carNumber: '64-56-054',
      carName: 'Lada Granta',
      comment: 'Black'
    },
    {
      id: 5,
      usedId: 4,
      carNumber: '640-56-504',
      carName: 'Nissan Cube',
      comment: 'Car of my wife'
    },
    {
      id: 6,
      usedId: 5,
      carNumber: '64-506-54',
      carName: 'Kia Rio',
      comment: 'My old car'
    },
    {
      id: 7,
      usedId: 6,
      carNumber: '64-565-44',
      carName: 'Mercedes-Benz',
      comment: 'yellow'
    },
    {
      id: 8,
      usedId: 4,
      carNumber: '645-65-477',
      carName: 'Renault Megane',
      comment: 'Silver color'
    }
  ];

  fines: Fine[] = [
    {
      id: 1,
      carId: 1,
      sum: 100,
      dateTime: '01.01.1991',
      parkingId: 1
    }
  ];
}
