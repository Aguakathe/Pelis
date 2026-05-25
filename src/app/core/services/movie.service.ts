import { Injectable } from '@angular/core';

export interface Review {
  initials: string;
  name: string;
  rating: number;
  comment: string;
  color: string;
}

export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  duration: string;
  description: string;
  summary: string;
  image: string;
  trailerUrl: string;
  genre: string;
  reviews: Review[];
}

export interface Serie {
  id: number;
  title: string;
  year: number;
  rating: number;
  seasons: number;
  description: string;
  summary: string;
  image: string;
  trailerUrl: string;
  genre: string;
  reviews: Review[];
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
      duration: '2h 18m',
      description: 'La humanidad se enfrenta a una amenaza sin precedentes: enjambres masivos de infectados veloces que han puesto al mundo de rodillas.',
      summary: 'En un mundo al borde del colapso, un ex agente de la ONU debe recorrer el planeta entero para encontrar la clave que detenga una pandemia zombie que amenaza con extinguir a la humanidad. Una carrera contra el tiempo llena de tensión, acción y momentos de puro suspenso.',
      image: 'img/accion.jpg',
      trailerUrl: 'https://www.youtube.com/embed/_pLxluB3CUo',
      genre: 'Acción',
      reviews: [
        { initials: 'JD', name: 'Juan Díaz', rating: 5, comment: 'Una obra maestra del cine moderno. Impresionante de principio a fin.', color: '#dc2626' },
        { initials: 'ML', name: 'María López', rating: 4, comment: 'Muy entretenida, aunque el final me dejó con ganas de más.', color: '#7c3aed' },
        { initials: 'CR', name: 'Carlos Ruiz', rating: 5, comment: 'Excelente producción. Los efectos visuales son espectaculares.', color: '#2563eb' }
      ]
    },
    {
      id: 2,
      title: 'El Último Testigo',
      year: 2021,
      rating: 9.1,
      duration: '1h 54m',
      description: 'Nadie sabe lo que realmente vio esa noche. La verdad se esconde en las sombras.',
      summary: 'Un detective retirado recibe una llamada anónima que lo arrastra de nuevo al caso que arruinó su carrera. Cada pista lo acerca más a una verdad que alguien poderoso quiere mantener oculta a cualquier costo.',
      image: 'img/suspenso.jpg',
      trailerUrl: 'https://www.youtube.com/embed/n3oPfh4L1-M',
      genre: 'Acción',
      reviews: [
        { initials: 'AM', name: 'Ana Martínez', rating: 5, comment: 'No pude dejar de verla. El giro final me dejó sin palabras.', color: '#059669' },
        { initials: 'PG', name: 'Pedro Gómez', rating: 4, comment: 'Muy bien actuada y con una atmósfera increíble.', color: '#d97706' },
        { initials: 'LR', name: 'Laura Ríos', rating: 5, comment: 'De lo mejor del género en años. Totalmente recomendada.', color: '#dc2626' }
      ]
    },
    {
      id: 3,
      title: 'Harry Potter 1',
      year: 2001,
      rating: 8.8,
      duration: '2h 35m',
      description: 'Un niño huérfano maltratado por sus tíos, descubre a los 11 años que es mago.',
      summary: 'Harry Potter descubre en su undécimo cumpleaños que es un mago y que fue admitido en el Colegio Hogwarts de Magia y Hechicería. Allí hará amigos, descubrirá sus poderes y enfrentará al oscuro mago que asesinó a sus padres.',
      image: 'img/scifi.jpeg',
      trailerUrl: 'https://www.youtube.com/embed/L7Ckib8HRko',
      genre: 'Ciencia Ficción',
      reviews: [
        { initials: 'SV', name: 'Sofía Vargas', rating: 5, comment: 'Un clásico eterno. La magia de esta película nunca envejece.', color: '#7c3aed' },
        { initials: 'DM', name: 'Diego Mora', rating: 5, comment: 'La vi de niño y la sigo amando igual. Perfecta.', color: '#2563eb' },
        { initials: 'VP', name: 'Valentina P', rating: 4, comment: 'Hermosa adaptación del libro. Los efectos son geniales para su época.', color: '#059669' }
      ]
    },
    {
      id: 4,
      title: 'Norbit',
      year: 2007,
      rating: 7.9,
      duration: '1h 42m',
      description: 'Un hombre tímido y de buen corazón, atrapado en un matrimonio infeliz con la dominante Rasputia.',
      summary: 'Norbit no ha tenido una vida fácil. De pequeño fue abandonado ante la puerta de un restaurante chino, que hacía las veces de orfanato. Cuando ya no puede más, reaparece Kate, su gran amor de infancia.',
      image: 'img/comedia.jpg',
      trailerUrl: 'https://www.youtube.com/embed/HFIdZpc2L6w',
      genre: 'Comedia',
      reviews: [
        { initials: 'CM', name: 'Camila M', rating: 4, comment: 'Me reí muchísimo. Eddie Murphy es un genio de la comedia.', color: '#d97706' },
        { initials: 'JR', name: 'Javier Ruiz', rating: 3, comment: 'Entretenida aunque algo exagerada. Buena para reír.', color: '#dc2626' },
        { initials: 'NP', name: 'Natalia P', rating: 4, comment: 'Clásica comedia de los 2000. Muy divertida.', color: '#2563eb' }
      ]
    },
    {
      id: 5,
      title: 'Blancanieves',
      year: 2015,
      rating: 8.1,
      duration: '1h 45m',
      description: 'La historia de una joven princesa de corazón puro que debe huir de la malvada Reina y encuentra refugio en el bosque junto a siete enanitos.',
      summary: 'Blancanieves enfrenta los celos y la crueldad de la Reina Malvada, cuya obsesión por ser la más hermosa la lleva a perseguirla. Con la ayuda de nuevos amigos y su valentía, descubrirá el verdadero significado de la bondad y la esperanza en esta mágica adaptación del clásico cuento.',
      image: 'img/blancanieves.jpg',
      trailerUrl: 'https://youtu.be/UJuNWcnKFGY',
      genre: 'Animación',
      reviews: [
        { initials: 'LS', name: 'Laura Sánchez', rating: 5, comment: 'Preciosa pelicula, el vestuario es simplemente mágico.', color: '#7c3aed' },
        { initials: 'MG', name: 'María García', rating: 4, comment: 'Muy fiel al cuento original. Me encantó.', color: '#059669' },
        { initials: 'AP', name: 'Andrea P', rating: 5, comment: 'La mejor versión animada de Disney.', color: '#dc2626' }
      ]
    },
    {
      id: 6,
      title: 'Spider-Man: Across the Multiverse',
      year: 2023,
      rating: 9.3,
      duration: '2h 20m',
      description: 'Miles Morales regresa en una nueva aventura a través del multiverso donde conocerá una legión de Spider-Man.',
      summary: 'Miles Morales viaja a través del multiverso donde se reencuentra con Gwen Stacy y se une a la Sociedad Spider. Pero cuando choca con sus nuevos aliados sobre cómo manejar una amenaza, debe redefinir qué significa ser un héroe.',
      image: 'img/spiderman.jpg',
      trailerUrl: 'https://www.youtube.com/embed/shW9i6k8cB0',
      genre: 'Animación',
      reviews: [
        { initials: 'DR', name: 'Diego Ríos', rating: 5, comment: 'Una obra de arte visual. Revoluciona el cine animado.', color: '#2563eb' },
        { initials: 'CM', name: 'Carlos M', rating: 5, comment: 'La mejor película de superhéroes en años. Sin discusión.', color: '#dc2626' },
        { initials: 'VP', name: 'Valeria P', rating: 5, comment: 'El cliffhanger me dejó con el corazón en la mano.', color: '#7c3aed' }
      ]
    },
    {
      id: 7,
      title: 'El Diablo Viste de Prada',
      year: 2006,
      rating: 8.7,
      duration: '1h 49m',
      description: 'Una joven periodista consigue trabajo como asistente de la editora más temida del mundo de la moda.',
      summary: 'Andrea Sachs llega a Nueva York con sueños de ser escritora y termina siendo la segunda asistente de Miranda Priestly, la todopoderosa editora de la revista Runway. Entre el glamour y la crueldad, aprenderá cuánto está dispuesta a sacrificar por el éxito.',
      image: 'img/moda.jpg',
      trailerUrl: 'https://www.youtube.com/embed/SHogg_J6-h4',
      genre: 'Comedia',
      reviews: [
        { initials: 'SM', name: 'Sofía M', rating: 5, comment: 'Meryl Streep es absolutamente icónica en este papel.', color: '#d97706' },
        { initials: 'LV', name: 'Lucía V', rating: 5, comment: 'La veo cada año y nunca me aburre. Un clásico moderno.', color: '#059669' },
        { initials: 'KR', name: 'Karen R', rating: 4, comment: 'Divertida, elegante y con un mensaje poderoso.', color: '#dc2626' }
      ]
    },
    {
      id: 8,
      title: 'Ratatouille',
      year: 2007,
      rating: 9.0,
      duration: '1h 51m',
      description: 'Una rata con un extraordinario paladar sueña con convertirse en el mejor chef de París.',
      summary: 'Remy es una rata que ama la cocina y sueña con ser chef como su ídolo Auguste Gusteau. Con la ayuda de Linguini, un torpe empleado del restaurante más famoso de París, intentará demostrar que cualquiera puede cocinar... incluso una rata.',
      image: 'img/ratatouille.jpg',
      trailerUrl: 'https://www.youtube.com/embed/c3sBBRxDAqk',
      genre: 'Animación',
      reviews: [
        { initials: 'NM', name: 'Nicolás M', rating: 5, comment: 'Pixar en su máximo esplendor. Una joya atemporal.', color: '#2563eb' },
        { initials: 'IR', name: 'Isabella R', rating: 5, comment: 'La amo desde niña y la seguiré amando siempre.', color: '#7c3aed' },
        { initials: 'JC', name: 'Juan C', rating: 5, comment: 'La crítica de Anton Ego al final me hace llorar cada vez.', color: '#059669' }
      ]
    },
    {
      id: 9,
      title: 'Dune',
      year: 2021,
      rating: 8.9,
      duration: '2h 35m',
      description: 'Paul Atreides, un joven brillante, viaja al planeta más peligroso del universo para asegurar el futuro de su familia.',
      summary: 'En un futuro lejano, el joven Paul Atreides debe viajar a Arrakis, el planeta desértico que es la única fuente del espécimen más valioso del universo. Traición, destino y poder se entrelazan en una épica batalla por el control de la galaxia.',
      image: 'img/dune.jpg',
      trailerUrl: 'https://www.youtube.com/embed/8g18jFHCLXk',
      genre: 'Ciencia Ficción',
      reviews: [
        { initials: 'AR', name: 'Andrés R', rating: 5, comment: 'Visualmente impresionante. Denis Villeneuve es un genio.', color: '#d97706' },
        { initials: 'PM', name: 'Paula M', rating: 4, comment: 'Épica y majestuosa. Aunque algo lenta al inicio.', color: '#2563eb' },
        { initials: 'EM', name: 'Esteban M', rating: 5, comment: 'La mejor adaptación posible del libro. Extraordinaria.', color: '#dc2626' }
      ]
    },
    {
      id: 10,
      title: 'Mentiras Arriesgadas',
      year: 1994,
      rating: 7.8,
      duration: '2h 21m',
      description: 'Un agente secreto debe equilibrar sus misiones de alto riesgo con los secretos que le oculta a su familia.',
      summary: 'Harry Tasker lleva una doble vida: en casa es un aburrido vendedor de computadoras, pero en realidad es uno de los mejores agentes de espionaje del gobierno. Cuando su esposa empieza a sospechar, las dos vidas de Harry chocan de manera explosiva y cómica.',
      image: 'img/mentiras.jpg',
      trailerUrl: 'https://www.youtube.com/embed/F8t1Zk3XSRI',
      genre: 'Acción',
      reviews: [
        { initials: 'RC', name: 'Roberto C', rating: 4, comment: 'Schwarzenegger y Jamie Lee Curtis hacen una pareja genial.', color: '#059669' },
        { initials: 'GM', name: 'Gloria M', rating: 4, comment: 'Divertidísima. Una de las mejores comedias de acción.', color: '#7c3aed' },
        { initials: 'HV', name: 'Hernán V', rating: 4, comment: 'Clásico de los 90 que no envejece. Pura diversión.', color: '#d97706' }
      ]
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  private series: Serie[] = [
    {
      id: 1,
      title: 'Breaking Bad',
      year: 2008,
      rating: 9.5,
      seasons: 5,
      description: 'Un profesor de química se convierte en el mayor productor de metanfetamina de Nuevo México.',
      summary: 'Walter White, un profesor de química con cáncer terminal, decide fabricar droga para asegurar el futuro económico de su familia.',
      image: 'img/breakingbad.jpg',
      trailerUrl: 'https://www.youtube.com/embed/HhesaQXLuRY',
      genre: 'Drama',
      reviews: [
        { initials: 'JD', name: 'Juan Díaz', rating: 5, comment: 'La mejor serie de la historia.', color: '#dc2626' },
        { initials: 'ML', name: 'María López', rating: 5, comment: 'Adictiva desde el primer capítulo.', color: '#7c3aed' }
      ]
    },
    {
      id: 2,
      title: 'Stranger Things',
      year: 2016,
      rating: 8.7,
      seasons: 4,
      description: 'Un grupo de niños descubre fuerzas sobrenaturales en su pequeño pueblo.',
      summary: 'Cuando Will Byers desaparece, sus amigos descubren un portal a otra dimensión y una niña con poderes llamada Eleven.',
      image: 'img/strangerthings.jpg',
      trailerUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU',
      genre: 'Ciencia Ficción',
      reviews: [
        { initials: 'AM', name: 'Ana Martínez', rating: 5, comment: 'Nostalgia pura mezclada con terror.', color: '#059669' },
        { initials: 'PG', name: 'Pedro Gómez', rating: 4, comment: 'Las primeras temporadas son perfectas.', color: '#d97706' }
      ]
    },
    {
      id: 3,
      title: 'The Office',
      year: 2005,
      rating: 9.0,
      seasons: 9,
      description: 'El día a día de los empleados de una oficina de papel en Pennsylvania.',
      summary: 'Filmada en formato documental, sigue la vida laboral de los empleados de Dunder Mifflin con Michael Scott como jefe incompetente pero entrañable.',
      image: 'img/theoffice.jpg',
      trailerUrl: 'https://www.youtube.com/embed/LHmn6L7Lbg8',
      genre: 'Comedia',
      reviews: [
        { initials: 'SV', name: 'Sofía Vargas', rating: 5, comment: 'Me la vi tres veces y sigo riéndome.', color: '#7c3aed' },
        { initials: 'DM', name: 'Diego Mora', rating: 5, comment: 'Steve Carell es insuperable.', color: '#2563eb' }
      ]
    },
    {
      id: 4,
      title: 'Game of Thrones',
      year: 2011,
      rating: 9.2,
      seasons: 8,
      description: 'Nobles familias luchan por el control del Trono de Hierro en Westeros.',
      summary: 'En un mundo de fantasía medieval, varias casas nobles compiten por el poder mientras una amenaza sobrenatural crece más allá del Muro del Norte.',
      image: 'img/game.webp',
      trailerUrl: 'https://www.youtube.com/embed/bjqEWgDVPe0',
      genre: 'Acción',
      reviews: [
        { initials: 'RC', name: 'Roberto C', rating: 5, comment: 'Las primeras 6 temporadas son perfectas.', color: '#059669' },
        { initials: 'GM', name: 'Gloria M', rating: 4, comment: 'Adictiva e impredecible.', color: '#7c3aed' }
      ]
    },
    {
      id: 5,
      title: 'Friends',
      year: 1994,
      rating: 8.9,
      seasons: 10,
      description: 'Seis amigos navegan la vida adulta en Nueva York entre relaciones y humor.',
      summary: 'Ross, Rachel, Monica, Chandler, Joey y Phoebe viven sus vidas en Manhattan. Una de las sitcoms más icónicas de todos los tiempos.',
      image: 'img/friends.jpg',
      trailerUrl: 'https://www.youtube.com/embed/hDNNmeeJs1Q',
      genre: 'Comedia',
      reviews: [
        { initials: 'SM', name: 'Sofía M', rating: 5, comment: 'Un clásico eterno.', color: '#d97706' },
        { initials: 'LV', name: 'Lucía V', rating: 5, comment: 'Los personajes se vuelven parte de tu vida.', color: '#059669' }
      ]
    }
  ];

  getSeries(): Serie[] {
    return this.series;
  }

  getSerieById(id: number): Serie | undefined {
    return this.series.find(serie => serie.id === id);
  }
}