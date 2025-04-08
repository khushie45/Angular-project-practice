/**
 * =============================== Feature Selector vs. Normal Selector ===============================
 *
 * Feature                | createFeatureSelector                     | createSelector
 * ---------------------------------------------------------------------------------------------------
 * Purpose               | Selects the entire feature state           | Selects specific properties from a feature state
 * Usage                 | Used as a base selector for other selectors| Used to extract specific data
 * Parameters            | Takes one argument (feature state key)     | Takes one or more selectors as input
 * Example Output        | { products: [], loading: false }           | [{ id: 1, name: 'Phone' }]
 *
 * ====================================================================================================
 */

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

// Feature Selector: Selects the entire feature state
export const selectProductState =
  createFeatureSelector<ProductState>('products');

// Normal Selectors: Extract specific properties from the feature state
export const selectProducts = createSelector(
  selectProductState,
  (state) => state?.products ?? [] // Extracts the products array
);

export const selectLoading = createSelector(
  selectProductState,
  (state) => state?.loading ?? false // Extracts the loading state
);
