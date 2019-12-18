import {Injectable} from "@angular/core";
import {User} from "../../_models/user";
import {Role} from "../../_models/role.enum";

@Injectable({
  providedIn: 'root'
})

export class BackendData {
  users: User[] = [
    {
      "name": "John",
      "id": 666,
      "email": "rr@rr.rr",
      "password": "123",
      "role": Role.Admin,
      "token": "dsfsdfsdfsdfsdf"
    },
    {
      "name": "Ron",
      "id": 55,
      "email": "rr@rr.rr",
      "password": "123",
      "role": Role.Admin,
      "token": "dsfsdfsdfsdfsdf"
    },
    {
      "name": "Ron1",
      "id": 345,
      "email": "rr@rr.rr",
      "password": "123",
      "role": Role.Admin,
      "token": "dsfsdfsdfsdfsdf"
    },
    {
      "name": "Ron2",
      "id": 645654,
      "email": "rr@rr.rr",
      "password": "123",
      "role": Role.Admin,
      "token": "dsfsdfsdfsdfsdf"
    }
  ];
}
