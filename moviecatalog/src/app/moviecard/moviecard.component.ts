import { AuthService } from './../account/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie.interface';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css'],
})
export class MoviecardComponent implements OnInit {
  @Input()
  item: Movie;

  additional = false;

  toggle(): void {
    this.additional = !this.additional;
  }

  get isAutorized(): boolean {
    return this.authService.autorized;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
