import { MoviesService } from './../services/movies.service';
import { Movie } from './../models/movie.interface';
import { genres } from './../models/genres';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css'],
})
export class AddfilmComponent implements OnInit {
  genres: string[] = [];
  movie: Movie;

  newFilm = new FormGroup({
    poster: new FormControl(),
    title: new FormControl('', Validators.required),
    year: new FormControl(),
    genre: new FormControl('', Validators.required),
    isWatched: new FormControl('', Validators.required),
    country: new FormControl(),
    director: new FormControl(),
    actors: new FormControl(),
    rate: new FormControl(),
    desription: new FormControl(),
  });

  onSubmit(form: NgForm): void {
    const data: Movie = form.value;

    // tslint:disable-next-line: forin
    for (const key in data) {
      switch (data[key]) {
        case null:
          delete data[key];
          break;
        case 'true':
          data[key] = data[key] === 'true';
          break;
        case 'false':
          data[key] = data[key] !== 'false';
          break;
      }
    }
    data.hidden = false;
    this.moviesService.addMovie(data);
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    genres.forEach((item) => this.genres.push(item));
  }
}
