import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  genres: string[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.genres = this.moviesService.getGenres();
  }
}
