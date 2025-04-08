import { FilteredTodosPipe } from './filtered-todos.pipe';

describe('FilteredTodosPipe', () => {
  it('create an instance', () => {
    const pipe = new FilteredTodosPipe();
    expect(pipe).toBeTruthy();
  });
});
