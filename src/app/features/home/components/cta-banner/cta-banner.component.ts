import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.css'
})
export class CtaBannerComponent {

  constructor(private router: Router) {}

  goToTop(): void {
    this.router.navigate(['/top']);
  }
}