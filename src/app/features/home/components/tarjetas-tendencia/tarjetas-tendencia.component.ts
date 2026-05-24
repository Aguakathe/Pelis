import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService, Movie } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-tarjetas-tendencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjetas-tendencia.component.html',
  styleUrl: './tarjetas-tendencia.component.css'
})
export class TarjetasTendenciaComponent implements OnInit {

  movies: Movie[] = [];
  currentIndex = 0;
  visibleCount = 4;
  showTrailer = false;
  safeTrailerUrl: SafeResourceUrl = '';

  constructor(
    private movieService: MovieService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.movies = [...this.movieService.getMovies()]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  }

  get visibleMovies(): Movie[] {
    return this.movies.slice(this.currentIndex, this.currentIndex + this.visibleCount);
  }

  get canGoBack(): boolean { return this.currentIndex > 0; }
  get canGoForward(): boolean { return this.currentIndex + this.visibleCount < this.movies.length; }

  prev(): void { if (this.canGoBack) this.currentIndex--; }
  next(): void { if (this.canGoForward) this.currentIndex++; }

  goToDetail(id: number): void {
    this.router.navigate(['/movie', id]);
  }

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