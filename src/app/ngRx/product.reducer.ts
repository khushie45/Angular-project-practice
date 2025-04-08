import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model';
import {
  getProducts,
  getProductsSuccess,
  getProductsFailure,
  addProduct,
  addProductSuccess,
  addProductFailure,
  updateProduct,
  updateProductSuccess,
  updateProductFailure,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFailure,
} from './product.actions';

export interface ProductState {
  products: Product[]; // Array to hold products
  loading: boolean; // Indicates loading state
  error: string | null; // Holds error message if any
}

// Define the initial state
export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Define the reducer function
export const productReducer = createReducer(
  initialState,

  // Load products
  on(getProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(getProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(getProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Add product
  on(addProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(addProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    products: [...state.products, product],
  })),
  on(addProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Update product
  on(updateProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(updateProductSuccess, (state, { updatedProduct }) => ({
    ...state,
    loading: false,
    products: state.products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ),
  })),
  on(updateProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Delete product
  on(deleteProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(deleteProductSuccess, (state, { productId }) => ({
    ...state,
    loading: false,
    products: state.products.filter((product) => product.id !== productId),
  })),
  on(deleteProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
