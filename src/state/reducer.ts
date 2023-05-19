import { StateType, TodoActionsType } from './types';
import { todos } from '../data/todos';

const initialState: StateType = {
  todos: todos,
  maxId: Math.max(...todos.map((todo) => todo.id)),
  searchedId: null,
  sortBy: null,
  filterBy: null,
};

export const reducer = (
  state = initialState,
  action: TodoActionsType
): StateType => {
  switch (action.type) {
    default:
      return state;
  }
};
