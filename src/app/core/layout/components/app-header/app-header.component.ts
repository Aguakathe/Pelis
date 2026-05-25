import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="header">
      <div class="header__container">

        <!-- Logo -->
        <a routerLink="/" class="header__logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
            <line x1="7" y1="2" x2="7" y2="22"/>
            <line x1="17" y1="2" x2="17" y2="22"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <line x1="2" y1="7" x2="7" y2="7"/>
            <line x1="2" y1="17" x2="7" y2="17"/>
            <line x1="17" y1="17" x2="22" y2="17"/>
            <line x1="17" y1="7" x2="22" y2="7"/>
          </svg>
          CinePick
        </a>

        <!-- Navegación desktop -->
        <nav class="header__nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
          <a routerLink="/movies" routerLinkActive="active">Películas</a>
          <a routerLink="/series" routerLinkActive="active">Series</a>
          <a routerLink="/top" routerLinkActive="active">Top Recomendaciones</a>
        </nav>

        <!-- Acciones -->
        <div class="header__actions">

          <!-- Buscador -->
          <div class="search-wrapper">
            <button type="button" class="header__search" (click)="toggleSearch()">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5">
                <circle cx="6.5" cy="6.5" r="5"/>
                <line x1="10.5" y1="10.5" x2="14" y2="14"/>
              </svg>
            </button>

            @if (searchOpen) {
              <div class="search-box">
                <input
                  type="text"
                  class="search-input"
                  placeholder="Buscar películas o series..."
                  [value]="searchQuery"
                  (input)="onSearch($any($event.target).value)"
                  autofocus>

                @if (resultados.length > 0) {
                  <div class="search-resultados">
                    @for (item of resultados; track item.id) {
                      <div class="search-item" (click)="goToItem(item)">
                        <img [src]="item.image" [alt]="item.title" class="search-item__img">
                        <div class="search-item__info">
                          <span class="search-item__titulo">{{ item.title }}</span>
                          <span class="search-item__tipo">{{ item.tipo }} · {{ item.year }}</span>
                        </div>
                        <span class="search-item__rating">★ {{ item.rating }}</span>
                      </div>
                    }
                  </div>
                }

                @if (searchQuery.length > 0 && resultados.length === 0) {
                  <div class="search-vacio">
                    No se encontraron resultados para "{{ searchQuery }}"
                  </div>
                }
              </div>
            }
          </div>

          <button type="button" class="header__button" (click)="goToExplorar()">
            Explorar
          </button>

          <!-- Botón hamburguesa -->
          <button type="button" class="header__hamburger" (click)="toggleMenu()">
            @if (!menuOpen) {
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            }
            @if (menuOpen) {
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            }
          </button>

        </div>
      </div>

      <!-- Menú móvil -->
      @if (menuOpen) {
        <nav class="header__mobile-menu">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Inicio</a>
          <a routerLink="/movies" routerLinkActive="active" (click)="closeMenu()">Películas</a>
          <a routerLink="/series" routerLinkActive="active" (click)="closeMenu()">Series</a>
          <a routerLink="/top" routerLinkActive="active" (click)="closeMenu()">Top Recomendaciones</a>
        </nav>
      }

    </header>

    @if (searchOpen) {
      <div class="search-backdrop" (click)="closeSearch()"></div>
    }
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(10, 10, 10, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .header__container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 20px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .header__logo {
      color: #ffffff;
      text-decoration: none;
      font-size: 26px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header__nav {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .header__nav a {
      color: rgba(255, 255, 255, 0.72);
      text-decoration: none;
      transition: color 0.2s ease;
      font-size: 16px;
    }

    .header__nav a:hover,
    .header__nav a.active {
      color: #dc2626;
    }

    .header__actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .header__search {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
    }

    .header__search:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .header__button {
      border: none;
      border-radius: 999px;
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.10);
      color: #ffffff;
      cursor: pointer;
      transition: background 0.2s ease;
      font-size: 15px;
      font-weight: 500;
    }

    .header__button:hover {
      background: rgba(255, 255, 255, 0.18);
    }

    .header__hamburger {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 6px;
      align-items: center;
      justify-content: center;
    }

    .header__mobile-menu {
      display: flex;
      flex-direction: column;
      padding: 12px 20px 16px;
      gap: 4px;
      border-top: 1px solid rgba(255,255,255,0.08);
      background: rgba(10,10,10,0.98);
    }

    .header__mobile-menu a {
      color: rgba(255,255,255,0.72);
      text-decoration: none;
      font-size: 16px;
      padding: 10px 0;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      transition: color 0.2s ease;
    }

    .header__mobile-menu a:hover,
    .header__mobile-menu a.active {
      color: #dc2626;
    }

    /* ===== BUSCADOR ===== */
    .search-wrapper {
      position: relative;
    }

    .search-box {
      position: absolute;
      top: calc(100% + 12px);
      right: 0;
      width: 360px;
      background: #1a1a1a;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      overflow: hidden;
      z-index: 2000;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    }

    .search-input {
      width: 100%;
      padding: 14px 16px;
      background: transparent;
      border: none;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      color: white;
      font-size: 14px;
      outline: none;
    }

    .search-input::placeholder {
      color: rgba(255,255,255,0.4);
    }

    .search-resultados {
      max-height: 320px;
      overflow-y: auto;
    }

    .search-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .search-item:hover {
      background: rgba(255,255,255,0.05);
    }

    .search-item__img {
      width: 40px;
      height: 56px;
      object-fit: cover;
      border-radius: 4px;
      flex-shrink: 0;
    }

    .search-item__info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .search-item__titulo {
      font-size: 14px;
      font-weight: 600;
      color: white;
    }

    .search-item__tipo {
      font-size: 11px;
      color: rgba(255,255,255,0.45);
    }

    .search-item__rating {
      font-size: 12px;
      color: #f59e0b;
      font-weight: 700;
      white-space: nowrap;
    }

    .search-vacio {
      padding: 16px;
      text-align: center;
      color: rgba(255,255,255,0.4);
      font-size: 13px;
    }

    .search-backdrop {
      position: fixed;
      inset: 0;
      z-index: 999;
    }

    @media (max-width: 768px) {
      .header__container {
        padding: 12px 16px;
        flex-wrap: nowrap;
        justify-content: space-between;
      }

      .header__nav {
        display: none;
      }

      .header__hamburger {
        display: flex;
      }

      .header__logo {
        font-size: 18px;
      }

      .header__actions {
        gap: 8px;
      }

      .header__button {
        padding: 8px 14px;
        font-size: 13px;
      }

      .search-box {
        width: 280px;
        right: -60px;
      }
    }
  `]
})
export class AppHeaderComponent {

  searchOpen = false;
  searchQuery = '';
  resultados: any[] = [];
  menuOpen = false;

  constructor(
    private router: Router,
    private movieService: MovieService,
  ) {}

  toggleSearch(): void {
    this.searchOpen = !this.searchOpen;
    if (!this.searchOpen) {
      this.searchQuery = '';
      this.resultados = [];
    }
  }

  closeSearch(): void {
    this.searchOpen = false;
    this.searchQuery = '';
    this.resultados = [];
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    if (query.trim().length === 0) {
      this.resultados = [];
      return;
    }

    const q = query.toLowerCase();

    const peliculas = this.movieService.getMovies()
      .filter(m => m.title.toLowerCase().includes(q))
      .map(m => ({ ...m, tipo: 'Película', ruta: 'movie' }));

    const series = this.movieService.getSeries()
      .filter(s => s.title.toLowerCase().includes(q))
      .map(s => ({ ...s, tipo: 'Serie', ruta: 'serie' }));

    this.resultados = [...peliculas, ...series].slice(0, 6);
  }

  goToItem(item: any): void {
    this.closeSearch();
    this.router.navigate(['/' + item.ruta, item.id]);
  }

  goToExplorar(): void {
    if (this.router.url === '/') {
      document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      });
    }
  }
}