import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService, Movie } from '../../../../core/services/movie.service';
import { MoviesFilterComponent } from '../../components/movies-filter/movies-filter.component';
import { MoviesCardComponent } from '../../components/movies-card/movies-card.component';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [CommonModule, MoviesFilterComponent, MoviesCardComponent],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.css'
})
export class MoviesPageComponent implements OnInit {

  movies: Movie[] = [];
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
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.genres = ['Todos', ...new Set(this.movies.map(m => m.genre))];
    this.years = ['Todos', ...new Set(this.movies.map(m => m.year.toString()))].sort((a, b) => {
      if (a === 'Todos') return -1;
      return Number(b) - Number(a);
    });

    this.route.queryParams.subscribe(params => {
      if (params['genre']) {
        this.selectedGenre = params['genre'];
      }
    });
  }

  get filteredMovies(): Movie[] {
    return this.movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesGenre = this.selectedGenre === 'Todos' || movie.genre === this.selectedGenre;
      const matchesYear = this.selectedYear === 'Todos' || movie.year.toString() === this.selectedYear;
      return matchesSearch && matchesGenre && matchesYear;
    });
  }

  onGenreChange(genre: string): void { this.selectedGenre = genre; }
  onYearChange(year: string): void { this.selectedYear = year; }
  onSearchChange(query: string): void { this.searchQuery = query; }

  goToDetail(id: number): void { this.router.navigate(['/movie', id]); }

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