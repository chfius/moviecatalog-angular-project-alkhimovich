import { ActivatedRoute } from '@angular/router';
import { Movie } from './../models/movie.interface';
import { MoviesService } from '../services/movies.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { pluck, tap } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-moviedashboard',
  templateUrl: './moviedashboard.component.html',
  styleUrls: ['./moviedashboard.component.css'],
})
export class MoviedashboardComponent {
  movies: Observable<Movie[]> = this.route.data.pipe(pluck('movies'));

  constructor(private route: ActivatedRoute) {}
}
