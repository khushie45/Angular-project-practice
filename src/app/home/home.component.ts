import {
  afterNextRender,
  afterRender,
  Component,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';
import { LifecycleDemoComponent } from '../components/lifecycle-demo/lifecycle-demo.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    GreetingComponent,
    CounterComponent,
    LifecycleDemoComponent,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  greetingsMessageFromParent = signal(
    'Greetings from Home component To Child Comp - Greetings'
  );

  router = inject(Router);

  pressedKey = 'None of the keys';

  keyUpHandler(event: KeyboardEvent) {
    console.log(`${event.key} pressed`);
    this.pressedKey = event.key;
  }

  counter = 0;

  incrementCounter() {
    this.counter += 1;
  }

  updateCounter(newValue: number) {
    this.counter = newValue;
  }

  @ViewChild('user') LifecycleDemoComponent: any;

  constructor() {
    afterNextRender(() => {
      console.log('afternextrender', this.LifecycleDemoComponent.value);
    });

    afterRender(() => {
      console.log('afterRender', this.LifecycleDemoComponent.value);
    });
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToFormBuilder() {
    this.router.navigate(['/home/formBuilder']);
  }

  goToDynamicRoute() {
    this.router.navigate(['/user/khushi']);
  }
}
