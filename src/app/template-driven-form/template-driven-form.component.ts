import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, NgIf, JsonPipe],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: null,
    gender: '',
    subscription: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
  };

  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('Form Submitted:', this.user);
    }
  }
}
