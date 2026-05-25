import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__grid">

          <section>
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Enlaces rápidos
            </h3>
            <ul>
              <li><a routerLink="/">Inicio</a></li>
              <li><a routerLink="/movies">Películas</a></li>
              <li><a routerLink="/series">Series</a></li>
              <li><a routerLink="/top">Top Recomendaciones</a></li>
            </ul>
          </section>

          <section>
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Acerca de
            </h3>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Términos de uso</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </section>

          <section>
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Contacto
            </h3>
            <ul>
              <li><a href="#">Soporte</a></li>
              <li><a href="#">Sugerencias</a></li>
              <li><a href="#">Reportar problema</a></li>
              <li><a href="#">Publicidad</a></li>
            </ul>
          </section>

          <section>
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z"/>
                <circle cx="12" cy="12" r="3"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#dc2626" stroke="none"/>
              </svg>
              Redes sociales
            </h3>
            <div class="footer__social">
              <a href="#" class="social-btn" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" class="social-btn" title="Twitter/X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L2.25 2.25h6.928l4.279 5.658 5.787-5.658zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
                </svg>
              </a>
              <a href="#" class="social-btn" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" class="social-btn" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                </svg>
              </a>
            </div>
          </section>

        </div>

        <div class="footer__copy">
          © 2026 CinePick. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: 48px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(0, 0, 0, 0.35);
    }

    .footer__container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 48px 40px 32px;
    }

    .footer__grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 32px;
    }

    .footer h3 {
      margin: 0 0 16px 0;
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .footer ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 10px;
    }

    .footer ul a {
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.2s ease;
    }

    .footer ul a:hover {
      color: #dc2626;
    }

    .footer__social {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .social-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.7);
      text-decoration: none;
      transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
    }

    .social-btn:hover {
      background: #dc2626;
      border-color: #dc2626;
      color: white;
    }

    .footer__copy {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      color: rgba(255, 255, 255, 0.35);
      font-size: 13px;
      text-align: center;
    }

    @media (max-width: 900px) {
      .footer__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 600px) {
      .footer__grid {
        grid-template-columns: 1fr;
      }
      .footer__container {
        padding: 32px 20px;
      }
    }
  `],
})
export class AppFooterComponent {}