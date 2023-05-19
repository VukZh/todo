import { ActionTypes, StateType, TodoActionsType } from './types';
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
    case ActionTypes.ADD_TODO: {
      const maxId = Math.max(...state.todos.map((todo) => todo.id)) + 1;
      const newTodo = { ...action.payload, id: maxId };
      return { ...state, maxId: maxId, todos: [...state.todos, newTodo] };
    }
    case ActionTypes.DEL_TODO: {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      const maxId = Math.max(...newTodos.map((todo) => todo.id));
      return { ...state, maxId: maxId, todos: [...newTodos] };
    }
    case ActionTypes.CHANGE_TODO: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
      return { ...state, todos: [...newTodos] };
    }
    case ActionTypes.SET_SEARCH_ID: {
      return { ...state, searchedId: action.payload };
    }
    case ActionTypes.SET_SORT: {
      return { ...state, sortBy: action.payload };
    }
    case ActionTypes.SET_FILTER: {
      return { ...state, filterBy: action.payload };
    }
    case ActionTypes.SET_COMPLETE: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            id: todo.id,
            title: todo.title,
            userId: todo.userId,
            completed: action.payload.completed,
          };
        }
        return todo;
      });
      return { ...state, todos: [...newTodos] };
    }
    default:
      return state;
  }
};

export type State = ReturnType<typeof reducer>;
