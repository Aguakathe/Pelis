import { Routes } from '@angular/router';
import { LayoutShellComponent } from './core/layout/layout-shell.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { MovieDetailComponent } from './features/movies/pages/movie-detail/movie-detail.component';
import { MoviesPageComponent } from './features/movies/pages/movies-page/movies-page.component';

export const routes: Routes = [
  {
    path: '',

    // Contenedor principal
    component: LayoutShellComponent,

    //Contenido del medio que cambia según la URL
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'movies',
        component: MoviesPageComponent
      },
      {
        path: 'movie/:id', //pelicula con id dinámico
        component: MovieDetailComponent
      }
    ]
  },
];