import {
  ActionTypes,
  AddTodoActionType,
  ChangeTodoActionType,
  DelTodoActionType,
  FilterByActionType,
  FilterType,
  SearchIdActionType,
  SortByActionType,
  SortType,
} from './types';
import { TodoType } from '../data/todos';

const AddTodoAction = (todo: Omit<TodoType, 'id'>): AddTodoActionType => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    title: todo.title,
    userId: todo.userId,
    completed: todo.completed,
  },
});

const DelTodoAction = (todoId: number): DelTodoActionType => ({
  type: ActionTypes.DEL_TODO,
  payload: todoId,
});

const ChangeTodoAction = (todo: TodoType): ChangeTodoActionType => ({
  type: ActionTypes.CHANGE_TODO,
  payload: {
    id: todo.id,
    title: todo.title,
    userId: todo.userId,
    completed: todo.completed,
  },
});

const SearchIdAction = (id: number): SearchIdActionType => ({
  type: ActionTypes.SET_SEARCH_ID,
  payload: id,
});

const SortByAction = (sort: SortType): SortByActionType => ({
  type: ActionTypes.SET_SORT,
  payload: sort,
});

const FilterByAction = (filter: FilterType): FilterByActionType => ({
  type: ActionTypes.SET_FILTER,
  payload: filter,
});
