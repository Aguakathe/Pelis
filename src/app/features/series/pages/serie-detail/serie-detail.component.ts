import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService, Serie, Review } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-serie-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './serie-detail.component.html',
  styleUrl: './serie-detail.component.css'
})
export class SerieDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  private router = inject(Router);
  private sanitizer = inject(DomSanitizer);

  serie: Serie | undefined;
  showTrailer = false;
  safeTrailerUrl: SafeResourceUrl = '';

  nuevoNombre = '';
  nuevoComentario = '';
  nuevaEstrellas = 0;
  estrellaHover = 0;
  formularioEnviado = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.serie = this.movieService.getSerieById(id);
  }

  goBack(): void {
    this.router.navigate(['/series']);
  }

  openTrailer(): void {
    if (this.serie) {
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.serie.trailerUrl + '?autoplay=1'
      );
      this.showTrailer = true;
    }
  }

  closeTrailer(): void {
    this.showTrailer = false;
    this.safeTrailerUrl = '';
  }

  scrollToSummary(): void {
    document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' });
  }

  setEstrellas(valor: number): void {
    this.nuevaEstrellas = valor;
  }

  setHover(valor: number): void {
    this.estrellaHover = valor;
  }

  enviarValoracion(): void {
    if (!this.serie) return;
    if (!this.nuevoNombre.trim() || !this.nuevoComentario.trim() || this.nuevaEstrellas === 0) return;

    const iniciales = this.nuevoNombre.trim().split(' ')
      .map(n => n[0].toUpperCase()).slice(0, 2).join('');

    const colores = ['#dc2626', '#7c3aed', '#2563eb', '#059669', '#d97706'];
    const color = colores[Math.floor(Math.random() * colores.length)];

    const nuevaReview: Review = {
      initials: iniciales,
      name: this.nuevoNombre.trim(),
      rating: this.nuevaEstrellas,
      comment: this.nuevoComentario.trim(),
      color: color
    };

    this.serie.reviews.push(nuevaReview);

    this.nuevoNombre = '';
    this.nuevoComentario = '';
    this.nuevaEstrellas = 0;
    this.estrellaHover = 0;
    this.formularioEnviado = true;

    setTimeout(() => this.formularioEnviado = false, 3000);
  }
}