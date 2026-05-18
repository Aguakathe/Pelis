import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService, Movie } from '../../../../core/services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
  encapsulation: ViewEncapsulation.None  // ← agrega esto
})
export class MovieDetailComponent implements OnInit {

  movie: Movie | undefined;
  showTrailer = false;
  safeTrailerUrl: SafeResourceUrl = '';

  constructor(
    private route: ActivatedRoute,   // lee el :id de la URL
    private router: Router,          // para navegar si no existe la película
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Obtiene el :id de la URL y busca la película
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(id);

    // Si no existe la película, redirige al home
    if (!this.movie) this.router.navigate(['/']);
  }

  openTrailer(): void {
    if (!this.movie) return;
    this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.movie.trailerUrl + '?autoplay=1'
    );
    this.showTrailer = true;
  }

  closeTrailer(): void {
    this.showTrailer = false;
    this.safeTrailerUrl = '';
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  scrollToSummary(): void {
  const el = document.getElementById('summary');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
}