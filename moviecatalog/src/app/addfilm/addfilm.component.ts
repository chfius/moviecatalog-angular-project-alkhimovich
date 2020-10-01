import { genres } from './../models/genres';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css'],
})
export class AddfilmComponent implements OnInit {
  genres: string[] = [];

  newFilm = new FormGroup({
    poster: new FormControl(null),
    title: new FormControl(null),
    year: new FormControl(null),
    genre: new FormControl(null),
    isWatched: new FormControl(null),
    country: new FormControl(null),
    director: new FormControl(null),
    actors: new FormControl(null),
    rate: new FormControl(null),
    desription: new FormControl(null),
  });

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }

  constructor() {}

  ngOnInit(): void {
    genres.forEach((item) => this.genres.push(item));
  }
}
