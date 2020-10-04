import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviedashboard',
  templateUrl: './moviedashboard.component.html',
  styleUrls: ['./moviedashboard.component.css'],
})
export class MoviedashboardComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMovies()
      .subscribe((movie) => this.movies.push(movie));
  }
}
