import { Movie } from '../../../core/models/movie.interface';
import { AuthService } from '../../../components/account/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css'],
})
export class MoviecardComponent implements OnInit {
  @Input()
  item: Movie;

  @Output()
  delete = new EventEmitter<Movie>();

  additional = false;

  deleteHandler(): void {
    if (confirm('Действительно удалить?')) {
      this.delete.emit(this.item);
    }
  }

  toggle(): void {
    this.additional = !this.additional;
  }

  get isAutorized(): boolean {
    return this.authService.autorized;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
