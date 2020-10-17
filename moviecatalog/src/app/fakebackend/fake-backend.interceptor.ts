import { Movie } from './../models/movie.interface';
import { movies } from './movies';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  delay,
  dematerialize,
  materialize,
  mergeMap,
} from 'rxjs/internal/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return of(null).pipe(
      mergeMap(handleRoute),
      materialize(),
      delay(500),
      dematerialize(),
    );

    function handleRoute(): Observable<HttpEvent<Movie[]>> {
      switch (true) {
        case request.url.endsWith('/movies'):
          return of(
            new HttpResponse({
              status: 200,
              body: movies,
            }),
          );
        default:
          return next.handle(request);
      }
    }
  }
}
