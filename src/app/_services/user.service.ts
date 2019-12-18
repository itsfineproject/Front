import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../_models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:4200/users");
  }
}
