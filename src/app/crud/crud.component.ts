import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from '../ngRx/product.actions';
import { selectLoading, selectProducts } from '../ngRx/product.selectors';
import { AsyncPipe, CurrencyPipe, NgIf, NgFor } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { addToCart } from '../ngRx/cart.actions';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../components/product-dialog/product-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe,
    AsyncPipe,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  private store = inject(Store);
  private dialog = inject(MatDialog);

  products$: Observable<Product[]> = this.store.pipe(select(selectProducts));
  loading$: Observable<boolean> = this.store.pipe(select(selectLoading));

  dataSource = new MatTableDataSource<Product>([]);
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'price',
    'category',
    'addToCart',
    'edit',
    'delete',
  ];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.store.dispatch(getProducts());
    this.products$.subscribe((products) => {
      this.dataSource.data = products ?? [];
    });
  }

  onDeleteProduct(productId: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.store.dispatch(deleteProduct({ productId }));
    }
  }

  onAddToCart(product: Product): void {
    this.store.dispatch(addToCart({ product }));
  }

  openDialog(product: Product | null = null): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: product ?? null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.id) {
        this.store.dispatch(updateProduct({ product: result }));
      } else if (result) {
        this.store.dispatch(addProduct({ product: result }));
      }
    });
  }
}
