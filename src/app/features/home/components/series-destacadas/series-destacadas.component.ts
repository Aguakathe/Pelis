import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService, Serie } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-series-destacadas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-destacadas.component.html',
  styleUrl: './series-destacadas.component.css'
})
export class SeriesDestacadasComponent implements OnInit {

  series: Serie[] = [];
  showTrailer = false;
  safeTrailerUrl: SafeResourceUrl = '';

  constructor(
    private movieService: MovieService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.series = this.movieService.getSeries().slice(0, 4);
  }

  goToDetail(id: number): void {
    this.router.navigate(['/serie', id]);
  }

  goToSeries(): void {
    this.router.navigate(['/series']);
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