import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartCount } from '../../ngRx/cart.selector';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private store = inject(Store);

  cartCount$: Observable<number> = this.store.pipe(select(selectCartCount));

  title = signal('My First Angular Project');
}
