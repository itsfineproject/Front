import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../_models/user";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUsers(): Observable<User[]> {
    //return this.httpClient.get<User[]>("http://localhost:4200/users");
    return this.httpClient.jsonp<User[]>("http://localhost:4200/fake-api/users", 'callback').pipe(
      catchError(this.handleError));
  }
}
