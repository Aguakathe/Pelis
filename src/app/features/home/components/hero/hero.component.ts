import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeStyle, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService, Movie } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent implements OnInit, OnDestroy {

  // Usa directamente Movie del servicio — sin interfaz duplicada
  movies: Movie[] = [];

  currentIndex = 0;
  isAnimating = false;
  showTrailer = false;
  isPaused = false;
  safeTrailerUrl: SafeResourceUrl = '';

  private interval: any;

  constructor(
    private movieService: MovieService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  get activeMovie(): Movie {
    return this.movies[this.currentIndex];
  }

  ngOnInit(): void {
    // Una sola fuente de verdad
    this.movies = this.movieService.getMovies();
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  // ── Autoplay ──────────────────────────────────────────────

  startAutoplay(): void {
    this.interval = setInterval(() => {
      if (!this.isPaused) this.next();
    }, 6000);
  }

  stopAutoplay(): void {
    if (this.interval) clearInterval(this.interval);
  }

  resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  // ── Navegación ────────────────────────────────────────────

  next(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.movies.length;
      setTimeout(() => { this.isAnimating = false; }, 400);
    }, 300);
  }

  prev(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.movies.length) % this.movies.length;
      setTimeout(() => { this.isAnimating = false; }, 400);
    }, 300);
  }

  goTo(index: number): void {
    if (this.isAnimating || index === this.currentIndex) return;
    this.isAnimating = true;
    this.resetAutoplay();
    setTimeout(() => {
      this.currentIndex = index;
      setTimeout(() => { this.isAnimating = false; }, 400);
    }, 300);
  }

  // ── Interacción ───────────────────────────────────────────

  onHover(paused: boolean): void {
    this.isPaused = paused;
  }

  // Navega al detalle de la película activa
  goToDetail(): void {
  console.log('ID:', this.activeMovie.id);
  this.router.navigate(['/movie', this.activeMovie.id]);
}

  // ── Tráiler ───────────────────────────────────────────────

  openTrailer(): void {
    this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.activeMovie.trailerUrl + '?autoplay=1'
    );
    this.showTrailer = true;
    this.isPaused = true;
  }

  closeTrailer(): void {
    this.showTrailer = false;
    this.safeTrailerUrl = '';
    this.isPaused = false;
  }

  // ── Estilos ───────────────────────────────────────────────

  getBackgroundStyle(image: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${image}')`);
  }

  

}

