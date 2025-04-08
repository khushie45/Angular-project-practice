import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private http = inject(HttpClient);

  /* This line of code is making an HTTP GET request to the specified URL
  (`https://jsonplaceholder.typicode.com/todos`) using the `HttpClient` service injected into the
  `TodosService` class. The `get` method returns an observable of type `Array<Todo>`, indicating that
  it expects to receive an array of `Todo` objects from the API endpoint. */
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
