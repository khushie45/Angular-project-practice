import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  router = inject(Router);

  goToProfile() {
    this.router.navigate(['/dashboard/profile']);
  }

  goToHome() {
    this.router.navigate(['/dashboard']);
  }
}
