import { Routes } from '@angular/router';
import { LayoutShellComponent } from './core/layout/layout-shell.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';

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
      }
    ]
  },
];