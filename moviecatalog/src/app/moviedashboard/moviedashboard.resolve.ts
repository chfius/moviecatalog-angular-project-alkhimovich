import { MoviesService } from './../services/movies.service';
import { Movie } from './../models/movie.interface';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/internal/operators';

@Injectable()
export class MoviesResolve implements Resolve<Movie[]> {
  constructor(private moviesService: MoviesService) {}
  resolve(): Observable<Movie[]> {
    return this.moviesService.getMovies();
  }
}
