import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  genres: string[];

  genreClick(genre: string): void {
    // const allCheckbox = document.getElementById('allcheckbox');
    // allCheckbox.removeAttribute('checked');
    this.moviesService.showOnly(genre);
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.genres = this.moviesService.getGenres();
  }
}
