import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService, Movie } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-top-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-page.component.html',
  styleUrl: './top-page.component.css'
})
export class TopPageComponent implements OnInit {

  topMovies: Movie[] = [];
  showTrailer = false;
  safeTrailerUrl: SafeResourceUrl = '';

  constructor(
    private movieService: MovieService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.topMovies = this.movieService.getMovies()
      .slice()
      .sort((a, b) => b.rating - a.rating);
  }

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

  promedioRating(): string {
  const promedio = this.topMovies.reduce((sum, m) => sum + m.rating, 0) / this.topMovies.length;
  return promedio.toFixed(1);
}
}