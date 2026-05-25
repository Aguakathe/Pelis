import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService, Serie } from '../../../../core/services/movie.service';
import { SeriesCardComponent } from '../../components/series-card/series-card.component';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [CommonModule, SeriesCardComponent],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.css'
})
export class SeriesPageComponent implements OnInit {

  series: Serie[] = [];
  searchQuery = '';
  selectedGenre = 'Todos';
  selectedYear = 'Todos';

  showTrailer = false;
  safeTrailerUrl: SafeResourceUrl = '';

  genres: string[] = [];
  years: string[] = [];

  constructor(
    private movieService: MovieService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.series = this.movieService.getSeries();
    this.genres = ['Todos', ...new Set(this.series.map(s => s.genre))];
    this.years = ['Todos', ...new Set(this.series.map(s => s.year.toString()))].sort((a, b) => {
      if (a === 'Todos') return -1;
      return Number(b) - Number(a);
    });
  }

  get filteredSeries(): Serie[] {
    return this.series.filter(serie => {
      const matchesSearch = serie.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesGenre = this.selectedGenre === 'Todos' || serie.genre === this.selectedGenre;
      const matchesYear = this.selectedYear === 'Todos' || serie.year.toString() === this.selectedYear;
      return matchesSearch && matchesGenre && matchesYear;
    });
  }

  onGenreChange(genre: string): void { this.selectedGenre = genre; }
  onYearChange(year: string): void { this.selectedYear = year; }
  onSearchChange(query: string): void { this.searchQuery = query; }

  goToDetail(id: number): void { this.router.navigate(['/serie', id]); }

  openTrailer(trailerUrl: string): void {
    this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      trailerUrl + '?autoplay=1'
    );
    this.showTrailer = true;
  }

  closeTrailer(): void {
    this.showTrailer = false;
    this.safeTrailerUrl = '';
  }
}