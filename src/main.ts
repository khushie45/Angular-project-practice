import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { ProductEffects } from './app/ngRx/product.effect';
import { productReducer } from './app/ngRx/product.reducer';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { cartReducer } from './app/ngRx/cart.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({ products: productReducer, cart: cartReducer }),
    provideEffects(ProductEffects),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
