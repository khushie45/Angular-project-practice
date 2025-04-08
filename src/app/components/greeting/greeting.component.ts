import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css',
})
export class GreetingComponent {
  greetingsMessage = input('Default message'); //if no message provided from parent then this default message will be rendered.
}
