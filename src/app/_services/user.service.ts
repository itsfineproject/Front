import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../_models/user';
import {map, tap} from 'rxjs/operators';
import {Fine} from '../_models/fine';
import {URLs} from '../_models/urls';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    // private http: HttpClient,
    private db: AngularFirestore) {
  }
//from Json-server
//   getUser(userId) {
//     console.log(URLs.urlGetUsers);
//     return this.http.get(URLs.urlGetUsers)
//       // .subscribe(res => console.log(res), err => console.log(err));
//       .pipe(
//       // tap(users => console.log(users)));
//       map((users: any) => {
//         console.log(users);
//         const data = users.filter(user => user.id == userId);
//         console.log(data);
//         return data;
//       }));
//   }
    getUser(userId) {
    return this.db.collection('users').valueChanges()
      .pipe(
      map((users: any) => {
        console.log(users);
        const data = users.filter(user => user.id == userId);
        console.log(data);
        return data;
      }));
    }
}
