import { Injectable } from '@angular/core';

export interface Review {
  initials: string;
  name: string;
  rating: number;
  comment: string;
  color: string; // color del avatar
}

// Interfaz general para cualquier película en la app
export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  description: string;
  summary: string;  // ← resumen 
  image: string;
  trailerUrl: string;
  genre: string;
  reviews: Review[]; // ← valoraciones
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    {
      id: 1,
      title: 'Guerra Mundial Z',
      year: 2013,
      rating: 8.4,
      description: 'La humanidad se enfrenta a una amenaza sin precedentes: enjambres masivos de infectados veloces que han puesto al mundo de rodillas.',
      summary: 'En un mundo al borde del colapso, un ex agente de la ONU debe recorrer el planeta entero para encontrar la clave que detenga una pandemia zombie que amenaza con extinguir a la humanidad. Una carrera contra el tiempo llena de tensión, acción y momentos de puro suspenso.',
      image: 'img/accion.jpg',
      trailerUrl: 'https://www.youtube.com/embed/_pLxluB3CUo',
      genre: 'Acción',
      reviews: [
        { initials: 'JD', name: 'Juan Díaz',    rating: 5, comment: 'Una obra maestra del cine moderno. Impresionante de principio a fin.', color: '#dc2626' },
        { initials: 'ML', name: 'María López',  rating: 4, comment: 'Muy entretenida, aunque el final me dejó con ganas de más.', color: '#7c3aed' },
        { initials: 'CR', name: 'Carlos Ruiz',  rating: 5, comment: 'Excelente producción. Los efectos visuales son espectaculares.', color: '#2563eb' }
      ]
    },
    {
      id: 2,
      title: 'El Último Testigo',
      year: 2021,
      rating: 9.1,
      description: 'Nadie sabe lo que realmente vio esa noche. La verdad se esconde en las sombras.',
      summary: 'Un detective retirado recibe una llamada anónima que lo arrastra de nuevo al caso que arruinó su carrera. Cada pista lo acerca más a una verdad que alguien poderoso quiere mantener oculta a cualquier costo.',
      image: 'img/suspenso.jpg',
      trailerUrl: 'https://www.youtube.com/embed/n3oPfh4L1-M',
      genre: 'Suspenso',
      reviews: [
        { initials: 'AM', name: 'Ana Martínez', rating: 5, comment: 'No pude dejar de verla. El giro final me dejó sin palabras.', color: '#059669' },
        { initials: 'PG', name: 'Pedro Gómez',  rating: 4, comment: 'Muy bien actuada y con una atmósfera increíble.', color: '#d97706' },
        { initials: 'LR', name: 'Laura Ríos',   rating: 5, comment: 'De lo mejor del género en años. Totalmente recomendada.', color: '#dc2626' }
      ]
    },
    {
      id: 3,
      title: 'Harry Potter 1',
      year: 2001,
      rating: 8.8,
      description: 'Un niño huérfano maltratado por sus tíos, descubre a los 11 años que es mago.',
      summary: 'Harry Potter descubre en su undécimo cumpleaños que es un mago y que fue admitido en el Colegio Hogwarts de Magia y Hechicería. Allí hará amigos, descubrirá sus poderes y enfrentará al oscuro mago que asesinó a sus padres.',
      image: 'img/scifi.jpeg',
      trailerUrl: 'https://www.youtube.com/embed/L7Ckib8HRko',
      genre: 'Ciencia Ficción',
      reviews: [
        { initials: 'SV', name: 'Sofía Vargas', rating: 5, comment: 'Un clásico eterno. La magia de esta película nunca envejece.', color: '#7c3aed' },
        { initials: 'DM', name: 'Diego Mora',   rating: 5, comment: 'La vi de niño y la sigo amando igual. Perfecta.', color: '#2563eb' },
        { initials: 'VP', name: 'Valentina P',  rating: 4, comment: 'Hermosa adaptación del libro. Los efectos son geniales para su época.', color: '#059669' }
      ]
    },
    {
      id: 4,
      title: 'Norbit',
      year: 2007,
      rating: 7.9,
      description: 'Un hombre tímido y de buen corazón, atrapado en un matrimonio infeliz con la dominante Rasputia.',
      summary: 'Norbit no ha tenido una vida fácil. De pequeño fue abandonado ante la puerta de un restaurante chino, que hacía las veces de orfanato, donde le crió el Sr. Wong. Las cosas se ponen aún peor cuando se ve obligado a casarse con Rasputia, la malvada y tragona reina de la comida basura. Cuando Norbit ya no puede más y está a punto de rendirse, reaparece Kate, su gran amor de infancia',
      image: 'img/comedia.jpg',
      trailerUrl: 'https://www.youtube.com/embed/HFIdZpc2L6w',
      genre: 'Comedia',
      reviews: [
        { initials: 'CM', name: 'Camila M',     rating: 4, comment: 'Me reí muchísimo. Eddie Murphy es un genio de la comedia.', color: '#d97706' },
        { initials: 'JR', name: 'Javier Ruiz',  rating: 3, comment: 'Entretenida aunque algo exagerada. Buena para reír.', color: '#dc2626' },
        { initials: 'NP', name: 'Natalia P',    rating: 4, comment: 'Clásica comedia de los 2000. Muy divertida.', color: '#2563eb' }
      ]
    }
  ];

  // Retorna todas las películas
  getMovies(): Movie[] {
    return this.movies;
  }

  // Retorna una película por su id
  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }
}