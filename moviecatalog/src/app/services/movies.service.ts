import { Movie } from './../core/models/movie.interface';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { map, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies$: Observable<any[]>;
  genres$: Observable<any[]>;
  movieDoc: AngularFirestoreDocument<Movie>;

  public showOnlyGenres: string[] = [];

  showOnlyGenres$ = new BehaviorSubject<string[]>(this.showOnlyGenres);

  getMovies(): Observable<Movie[]> {
    return this.movies$;
  }

  getGenres(): Observable<string[]> {
    this.genres$ = this.movies$.pipe(
      map((films: Movie[]) => {
        return films.map((item) => {
          return item.genre;
        });
      }),
    );
    return this.genres$;
  }

  showGenres(genres: string[] | []): void {
    this.showOnlyGenres = genres;
    this.showOnlyGenres$.next(this.showOnlyGenres);
  }

  addMovie(movie: Movie): void {
    // this.firestore.collection('movies').add(movie);
    this.firestore.collection('movies').doc(`${movie.title}`).set(movie);
  }

  deleteMovie(movie: Movie): void {
    this.firestore.doc(`/movies/${movie.title}`).delete();
  }

  constructor(private firestore: AngularFirestore) {
    this.movies$ = firestore
      .collection('movies', (ref) => ref.orderBy('title', 'asc'))
      .valueChanges();
    this.genres$ = this.movies$.pipe(
      map((films: Movie[]) => {
        return films.map((item) => {
          return item.genre;
        });
      }),
    );
    this.genres$.subscribe((genres) => {
      this.showOnlyGenres = genres;
      this.showOnlyGenres$.next(this.showOnlyGenres);
    });
  }
}
