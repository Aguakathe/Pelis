import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { TarjetasTendenciaComponent } from '../../components/tarjetas-tendencia/tarjetas-tendencia.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { SeriesDestacadasComponent } from '../../components/series-destacadas/series-destacadas.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, TarjetasTendenciaComponent, CategoriesComponent, CtaBannerComponent, SeriesDestacadasComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
}