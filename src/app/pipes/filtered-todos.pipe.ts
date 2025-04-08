import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.type';

@Pipe({
  name: 'filteredTodos',
})
export class FilteredTodosPipe implements PipeTransform {
  // transform takes 2 parameters: value, args
  //   value → The input data from the template.

  // args → Optional arguments passed to modify the behavior.

  // Returns → The transformed output.
  transform(todos: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return todos;
    }

    const text = searchTerm.toLowerCase();
    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(text);
    });
  }
}
