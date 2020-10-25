import { MoviesService } from './../services/movies.service';
import { Movie } from './../models/movie.interface';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-moviedashboard',
  templateUrl: './moviedashboard.component.html',
  styleUrls: ['./moviedashboard.component.css'],
})
export class MoviedashboardComponent {
  movies$: Observable<Movie[]>;
  visibleGenres: string[] = [];

  deleteMovie(movie: Movie): void {
    this.moviesService.deleteMovie(movie);
  }

  constructor(private moviesService: MoviesService) {
    this.movies$ = this.moviesService.movies$;
    this.moviesService.showOnlyGenres$.subscribe(
      (item) => (this.visibleGenres = item),
    );
  }
}
