import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/internal/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../core/models/movie.interface';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css'],
})
export class AddfilmComponent implements OnInit {
  genres$: Observable<string[]>;
  movie: Movie;
  hasUnsavedChanges = false;

  regex = /^https?:\/\/\S+$/;

  newFilm = new FormGroup({
    poster: new FormControl('', Validators.pattern(this.regex)),
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

  hasChanges(): void {
    this.hasUnsavedChanges = true;
  }

  onSubmit(form: NgForm): void {
    const data: Movie = form.value;

    // tslint:disable-next-line: forin
    for (const key in data) {
      // этот кейс очищает "мусорные" поля и меняет строковоую переменную на булевую
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

    this.moviesService.addMovie(data);
    form.reset();
    this.router.navigate(['/main']);
    this.hasUnsavedChanges = false;
  }

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private firestore: AngularFirestore,
  ) {}

  ngOnInit(): void {
    this.genres$ = this.firestore
      .collection<any>(`genres`)
      .valueChanges()
      .pipe(
        map((item: any) => {
          return item[0].genre;
        }),
      );
  }
}
