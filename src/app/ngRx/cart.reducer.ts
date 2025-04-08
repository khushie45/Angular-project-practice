import { createReducer, on } from '@ngrx/store';
import { addToCart } from './cart.actions';
import { Product } from '../models/product.model';

export interface CartState {
  products: Product[];
  cartCount: number;
}

export const initialState: CartState = {
  products: [],
  cartCount: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
    cartCount: state.cartCount + 1,
  }))
);
