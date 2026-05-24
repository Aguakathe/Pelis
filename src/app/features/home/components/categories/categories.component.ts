import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MovieService, Movie } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  categories: { label: string; image: string }[] = [];

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movies = this.movieService.getMovies();
    const genreMap = new Map<string, string>();
    movies.forEach(movie => {
      if (!genreMap.has(movie.genre)) {
        genreMap.set(movie.genre, movie.image);
      }
    });
    this.categories = Array.from(genreMap.entries()).map(([label, image]) => ({ label, image }));
  }

  goToCategory(genre: string): void {
    this.router.navigate(['/movies'], { queryParams: { genre } });
  }
}