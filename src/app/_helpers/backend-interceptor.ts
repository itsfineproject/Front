import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
<<<<<<< HEAD
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { BackendData } from "./fake-api/backend-data";
import {catchError, map, retry} from "rxjs/operators";
=======
  HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { BackendData } from "./backend-data";
import {catchError, retry} from "rxjs/operators";
>>>>>>> develop

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private backenddata: BackendData) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
<<<<<<< HEAD
    if(request.method === "GET" && request.url === "http://localhost:4200/users") {
      return of(new HttpResponse({status: 200, body: request.body}));
    } else {
      return next.handle(request)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            return throwError(errorMessage);
          })
        )
=======
    if(request.method === "POST" && request.url === "http://localhost:4200/auth") {
      if (request.body.params.login === "gruzin" && request.body.params.pass === "ganjubas") {
        return of(new HttpResponse({
          body: this.backenddata.token
        }));
      } else {
        return throwError({ error: { message: 'Login or password is incorrect' } });
      }
    } else if(request.method === "GET" && request.url === "http://localhost:4200/users") {
      return of(new HttpResponse({
        body: this.backenddata.users
      }));
    } else if(request.method === "GET" && request.url === "http://localhost:4200/cars") {
      return of(new HttpResponse({
        body: this.backenddata.cars
      }));
    } else if(request.method === "GET" && request.url === "http://localhost:4200/fines") {
      return of(new HttpResponse({
        body: this.backenddata.fines
      }));
>>>>>>> develop
    }
  }
}
