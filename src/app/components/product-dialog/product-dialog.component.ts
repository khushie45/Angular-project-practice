import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../models/product.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgIf,
  ],
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
})
export class ProductDialogComponent {
  private fb = inject(FormBuilder);
  public dialogRef = inject(MatDialogRef<ProductDialogComponent>);
  public data: Product = inject(MAT_DIALOG_DATA);
  
  productForm: FormGroup = this.fb.group({
    id: [this.data ? this.data.id : null],
    title: [this.data?.title || '', Validators.required],
    price: [this.data?.price || '', [Validators.required, Validators.min(10)]],
    category: [this.data?.category || '', Validators.required],
    description: [this.data?.description || '', Validators.required],
  });

  onSave(): void {
    if (this.productForm.valid) {
      this.dialogRef.close(this.productForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
