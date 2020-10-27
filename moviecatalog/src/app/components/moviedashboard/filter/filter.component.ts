import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';
import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  genres$: Observable<Set<string>>;

  genreAllClick(): void {
    const showOnlyGenres: string[] = [];
    const genresAll = Array.from(document.getElementsByTagName('input'));
    for (let i = 1; i < genresAll.length; i++) {
      genresAll[i].checked = genresAll[0].checked;
      if (genresAll[i].checked) {
        showOnlyGenres.push(genresAll[i].name);
      }
    }
    this.moviesService.showGenres(showOnlyGenres);
  }

  genreClick(genre: string): void {
    let showOnlyGenres = this.moviesService.showOnlyGenres;
    const genresAll = Array.from(document.getElementsByTagName('input'));
    genresAll[0].checked = false;

    if (showOnlyGenres.includes(genre)) {
      showOnlyGenres = showOnlyGenres.filter((item) => item !== genre);
    } else {
      showOnlyGenres.push(genre);
    }
    this.moviesService.showGenres(showOnlyGenres);
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.genres$ = this.moviesService.getGenres().pipe(
      map((item) => {
        return new Set(item);
      }),
    );
  }
}
