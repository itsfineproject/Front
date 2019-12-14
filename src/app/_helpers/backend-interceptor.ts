import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { BackendData } from "./fake-api/backend-data";
import {catchError, map, retry} from "rxjs/operators";

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private backenddata: BackendData) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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
    }
  }
}
