import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.actions';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CrudService } from '../services/crud.service';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private productService = inject(CrudService);

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProducts),
      exhaustMap(() =>
        this.productService.getProducts().pipe(
          map((products) => ProductActions.getProductsSuccess({ products })),
          catchError((error) =>
            of(ProductActions.getProductsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Add Product Effect
  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.addProduct),
      exhaustMap((action) =>
        this.productService.addProduct(action.product).pipe(
          map((product) => ProductActions.addProductSuccess({ product })),
          catchError((error) =>
            of(ProductActions.addProductFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Update Product Effect
  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      exhaustMap((action) =>
        this.productService.updateProduct(action.product).pipe(
          map((updatedProduct) =>
            ProductActions.updateProductSuccess({ updatedProduct })
          ),
          catchError((error) =>
            of(ProductActions.updateProductFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Delete Product Effect
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      exhaustMap((action) =>
        this.productService.deleteProduct(action.productId).pipe(
          map(() =>
            ProductActions.deleteProductSuccess({ productId: action.productId })
          ),
          catchError((error) =>
            of(ProductActions.deleteProductFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
