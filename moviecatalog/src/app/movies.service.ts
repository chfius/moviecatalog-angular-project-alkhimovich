import { Movie } from './movie.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [
    {
      poster:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/7c3460dc-344d-433f-8220-f18d86c8397d/300x450',
      title: 'Гладиатор',
      year: 2000,
      genre: 'боевик',
      isWatched: true,
      hidden: false,
    },
    {
      poster:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/6492653f-11d5-4087-a1d2-ec7a74f161d3/300x450',
      title: 'Карты, деньги, два ствола',
      year: 1998,
      genre: 'криминал',
      isWatched: true,
      hidden: false,
    },
    {
      poster:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/c667180c-14d0-4ccc-be70-f8858611429a/300x450',
      title: 'Отступники',
      year: 2006,
      genre: 'триллер',
      isWatched: false,
      actors:
        'Леонардо ДиКаприо, Мэтт Дэймон, Джек Николсон, Марк Уолберг, Мартин Шин, Рэй Уинстон, Вера Фармига, Алек Болдуин, Кевин Корригэн',
      hidden: false,
    },
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getGenres(): string[] {
    const genres: string[] = [];
    this.movies.forEach((el) => genres.push(el.genre));
    return genres;
  }

  showOnly(genre: string): void {
    this.movies.forEach((el) => (el.genre === genre ? (el.hidden = true) : (el.hidden = false)));
  }

  constructor() {}
}
