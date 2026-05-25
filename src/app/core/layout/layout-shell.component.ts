import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@Component({
  selector: 'app-layout-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppHeaderComponent, AppFooterComponent],
  template: `
    <div class="app-shell">
      <app-header />

      <main class="app-main">
        <router-outlet />
      </main>
      
      <app-footer />
    </div>
  `,
  styles: [`
    .app-shell {
      min-height: 100vh;
      background-color: #0a0a0a;
      color: #ffffff;
      display: flex;
      flex-direction: column;
    }

    .app-main {
  flex: 1;
  width: 100%;
  padding-top: 80px;
}
  `]
})
export class LayoutShellComponent {}