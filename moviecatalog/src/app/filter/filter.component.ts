import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  genres: string[];
  showOnlyGenres: string[] = [];

  genreAllClick(): void {
    const genresAll = Array.from(document.getElementsByTagName('input'));
    for (let i = 1; i < genresAll.length; i++) {
      genresAll[i].checked = genresAll[0].checked;
    }
    genresAll[0].checked ? (this.showOnlyGenres = this.genres) : (this.showOnlyGenres = []);
    this.moviesService.showOnly(this.showOnlyGenres);
  }

  genreClick(event: Event): void {
    this.showOnlyGenres = [];
    const genresAll = Array.from(document.getElementsByTagName('input'));
    for (let i = 1; i < genresAll.length; i++) {
      if (genresAll[i].checked) {
        this.showOnlyGenres.push(genresAll[i].name);
      }
    }
    genresAll[0].checked = false;
    this.moviesService.showOnly(this.showOnlyGenres);
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.genres = this.moviesService.getGenres();
  }
}
