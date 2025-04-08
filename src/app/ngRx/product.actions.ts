import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const getProducts = createAction('[Product] Load Products');

export const getProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);

export const getProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: string }>()
);

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Product] Add Product Failure',
  props<{ error: string }>()
);

export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ updatedProduct: Product }>()
);

export const updateProductFailure = createAction(
  '[Product] Update Product Failure',
  props<{ error: string }>()
);

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ productId: number }>()
);

export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ productId: number }>()
);

export const deleteProductFailure = createAction(
  '[Product] Delete Product Failure',
  props<{ error: string }>()
);
