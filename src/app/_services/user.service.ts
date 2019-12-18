import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../_models/user";
<<<<<<< HEAD
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
=======
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Car} from "../_models/car";
import {Fine} from "../_models/fine";
>>>>>>> develop

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
<<<<<<< HEAD

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUsers(): Observable<User[]> {
    //return this.httpClient.get<User[]>("http://localhost:4200/users");
    return this.httpClient.jsonp<User[]>("http://localhost:4200/fake-api/users", 'callback').pipe(
      catchError(this.handleError));
=======
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:4200/users");
>>>>>>> develop
  }
}
