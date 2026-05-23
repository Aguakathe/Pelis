import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movies-filter.component.html',
  styleUrl: './movies-filter.component.css'
})
export class MoviesFilterComponent {

  @Input() genres: string[] = [];
  @Input() years: string[] = [];
  @Input() selectedGenre = 'Todos';
  @Input() selectedYear = 'Todos';
  @Input() searchQuery = '';

  @Output() onGenreChange = new EventEmitter<string>();
  @Output() onYearChange = new EventEmitter<string>();
  @Output() onSearchChange = new EventEmitter<string>();

  selectGenre(genre: string): void {
    this.onGenreChange.emit(genre);
  }

  selectYear(year: string): void {
    this.onYearChange.emit(year);
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onSearchChange.emit(value);
  }
}