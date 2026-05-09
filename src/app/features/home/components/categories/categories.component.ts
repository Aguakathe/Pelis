import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  label: string;
  image: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
 categories: Category[] = [
    { label: 'Acción',          image: 'img/accion.jpg'   },
    { label: 'Suspenso',        image: 'img/suspenso.jpg' },
    { label: 'Ciencia ficción', image: 'img/scifi.jpeg'   },
    { label: 'Comedia',         image: 'img/comedia.jpg'  }
  ];
}
