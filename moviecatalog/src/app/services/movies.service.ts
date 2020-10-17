import { movies } from './../fakebackend/movies';
import { map, tap } from 'rxjs/internal/operators';
import { Movie } from './../models/movie.interface';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [];

  getMovies(): Observable<any> {
    return this.http
      .get(`/movies`)
      .pipe(tap((data: Movie[]) => (this.movies = data)));
  }

  getGenres(): string[] {
    const genres: string[] = [];
    this.movies.forEach((el) => genres.push(el.genre));
    return genres;
  }

  showOnly(genre: string[]): void {
    this.movies.forEach((el) =>
      genre.indexOf(el.genre) > -1 ? (el.hidden = false) : (el.hidden = true),
    );
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  constructor(private http: HttpClient) {}
}
