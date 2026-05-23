import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-movies-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-card.component.html',
  styleUrl: './movies-card.component.css'
})
export class MoviesCardComponent {
   @Input() movie!: Movie;

  @Output() onTrailer = new EventEmitter<string>();
  @Output() onDetail = new EventEmitter<number>();

  openTrailer(): void {
    this.onTrailer.emit(this.movie.trailerUrl);
  }

  goToDetail(): void {
    this.onDetail.emit(this.movie.id);
  }
}
