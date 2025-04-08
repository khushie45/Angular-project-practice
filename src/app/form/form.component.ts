import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [NgIf, ReactiveFormsModule, JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(60),
    ]),
    gender: new FormControl(''),
    subscription: new FormControl(''),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{6}$'),
      ]),
    }),
  });

  submitted = false;

  onSubmit() {
    if (this.userForm.valid) {
      this.submitted = true;
      console.log('Form Submitted:', this.userForm.value);
    }
  }

  ngOnInit() {
    console.log('Form loaded');
  }
}
