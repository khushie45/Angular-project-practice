import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: Product }>()
);
