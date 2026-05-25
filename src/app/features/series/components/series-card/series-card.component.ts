import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-series-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-card.component.html',
  styleUrl: './series-card.component.css'
})
export class SeriesCardComponent {
  @Input() serie!: Serie;
  @Output() onTrailer = new EventEmitter<string>();
  @Output() onDetail = new EventEmitter<number>();

  openTrailer(): void {
    this.onTrailer.emit(this.serie.trailerUrl);
  }

  goToDetail(): void {
    this.onDetail.emit(this.serie.id);
  }
}