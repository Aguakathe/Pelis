import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeStyle, SafeResourceUrl } from '@angular/platform-browser';

interface MovieData {
  key: string;
  label: string;
  title: string;
  description: string;
  duration: string;
  rating: string;
  image: string;
  trailerUrl: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent implements OnInit, OnDestroy {

  movies: MovieData[] = [
    {
      key: 'accion',
      label: 'Acción',
      title: 'Guerra Mundial Z',
      description: 'La humanidad se enfrenta a una amenaza sin precedentes: enjambres masivos de infectados veloces que han puesto al mundo de rodillas.',
      duration: '2h 18m',
      rating: '8.4',
      image: 'img/accion.jpg',
      trailerUrl: 'https://www.youtube.com/embed/_pLxluB3CUo'
    },
    {
      key: 'suspenso',
      label: 'Suspenso',
      title: 'El Último Testigo',
      description: 'Nadie sabe lo que realmente vio esa noche. La verdad se esconde en las sombras.',
      duration: '1h 54m',
      rating: '9.1',
      image: 'img/suspenso.jpg',
      trailerUrl: 'https://www.youtube.com/embed/n3oPfh4L1-M'
    },
    {
      key: 'scifi',
      label: 'Ciencia Ficción',
      title: 'Harry Potter 1',
      description: 'Un niño huérfano maltratado por sus tíos, descubre a los 11 años que es mago.',
      duration: '2h 35m',
      rating: '8.8',
      image: 'img/scifi.jpeg',
      trailerUrl: 'https://www.youtube.com/embed/L7Ckib8HRko'
    },
    {
      key: 'comedia',
      label: 'Comedia',
      title: 'Norbit',
      description: 'Un hombre tímido y de buen corazón, atrapado en un matrimonio infeliz con la dominante Rasputia.',
      duration: '1h 42m',
      rating: '7.9',
      image: 'img/comedia.jpg',
      trailerUrl: 'https://www.youtube.com/embed/HFIdZpc2L6w'
    }
  ];

  currentIndex = 0;
  isAnimating = false;
  showTrailer = false;
  isPaused = false;
  safeTrailerUrl: SafeResourceUrl = '';
  private interval: any;

  constructor(private sanitizer: DomSanitizer) {}

  get activeMovie(): MovieData {
    return this.movies[this.currentIndex];
  }

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

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

  onHover(paused: boolean): void {
    this.isPaused = paused;
  }

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

  getBackgroundStyle(image: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${image}')`);
  }
}