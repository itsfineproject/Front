import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../_models/user';
import {map, tap} from 'rxjs/operators';
import {Fine} from '../_models/fine';
import {URLs} from '../_models/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(userId) {
    console.log(URLs.urlGetUsers);
    return this.http.get(URLs.urlGetUsers)
      // .subscribe(res => console.log(res), err => console.log(err));
      .pipe(
      // tap(users => console.log(users)));
      map((users: any) => {
        console.log(users);
        const data = users.filter(user => user.id == userId);
        console.log(data);
        return data;
      }));
  }
}
