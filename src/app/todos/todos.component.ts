import { FilteredTodosPipe } from './../pipes/filtered-todos.pipe';
import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo.type';
import { catchError, map } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [NgIf, TodoItemComponent, FormsModule, FilteredTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    console.log('Todos loaded');

    this.todoService
      .getTodosFromApi()
      // The .pipe() method is used to apply operators to an Observable before subscribing.
      // Operators modify, filter, or transform the data emitted by the Observable.
      // Example: catchError(), map(), filter(), etc.
      .pipe(
        // map((todos) => todos.filter((todo) => todo.completed)),
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      // The .subscribe() method is used to listen to the data emitted by an Observable.
      // It executes when the Observable emits a value.
      .subscribe((filteredTodos) => {
        this.todoItems.set(filteredTodos);
      });
  }

  updateTodoToggled(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
