import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../_models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Car} from "../_models/car";
import {Fine} from "../_models/fine";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:4200/users");
  }
}
