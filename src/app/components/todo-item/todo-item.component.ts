import { Component, input, output } from '@angular/core';
import { Todo } from '../../models/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective, LowerCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
