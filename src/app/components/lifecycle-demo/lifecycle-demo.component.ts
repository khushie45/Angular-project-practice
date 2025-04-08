import {
  Component,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  template: `
    <h3>Angular Lifecycle Hooks Demo</h3>
    <p>Current Value: {{ value }}</p>
    <button (click)="changeValue()">Change Value (Child)</button>
  `,
})
export class LifecycleDemoComponent {
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {
    console.log('Constructor: Component instance created');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Input properties changed', changes);
  }

  ngOnInit() {
    console.log('ngOnInit: Component initialized');
  }

  ngDoCheck() {
    console.log('ngDoCheck: Change detection running');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: Content projected');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Content checked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: View initialized');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: View checked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Component destroyed');
  }

  changeValue() {
    this.value += 1;
    this.valueChange.emit(this.value);
  }
}
