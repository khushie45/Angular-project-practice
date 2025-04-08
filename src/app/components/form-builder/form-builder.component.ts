import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
  // Why form builder
  // Less Code: Reduces boilerplate code.

  // More Readable: Cleaner syntax, making forms easier to manage.

  // Easier Grouping: Easily create nested form groups.

  // Better Maintainability: Adding/removing fields is simpler.
  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    skills: this.formBuilder.array([]),
  });

  get skills(): FormArray {
    return this.profileForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.formBuilder.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  getError(controlName: string): string {
    const control = this.profileForm.get(controlName);
    if (!control) return '';

    return control.hasError('required')
      ? `${controlName} is required`
      : control.hasError('minlength')
      ? `Must be at least ${
          control.getError('minlength').requiredLength
        } characters`
      : control.hasError('email')
      ? 'Invalid email format'
      : '';
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form Submitted:', this.profileForm.value);
      this.profileForm.reset();
    }
  }
}
