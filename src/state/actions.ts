import {
  ActionTypes,
  AddTodoActionType,
  ChangeTodoActionType,
  CompletedActionType,
  CompletedType,
  DelTodoActionType,
  FilterByActionType,
  FilterType,
  SearchIdActionType,
  SortByActionType,
  SortType,
} from './types';
import { TodoType, TodoTypeForAdd } from '../data/todos';

const addTodoActionCreator = (todo: TodoTypeForAdd): AddTodoActionType => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    title: todo.title,
    userId: todo.userId,
    completed: todo.completed,
  },
});

const delTodoActionCreator = (todoId: number): DelTodoActionType => ({
  type: ActionTypes.DEL_TODO,
  payload: todoId,
});

const completedTodoActionCreator = (
  completed: CompletedType
): CompletedActionType => ({
  type: ActionTypes.SET_COMPLETE,
  payload: completed,
});

const changeTodoActionCreator = (todo: TodoType): ChangeTodoActionType => ({
  type: ActionTypes.CHANGE_TODO,
  payload: {
    id: todo.id,
    title: todo.title,
    userId: todo.userId,
    completed: todo.completed,
  },
});

const searchIdActionCreator = (id: number): SearchIdActionType => ({
  type: ActionTypes.SET_SEARCH_ID,
  payload: id,
});

const sortByActionCreator = (sort: SortType): SortByActionType => ({
  type: ActionTypes.SET_SORT,
  payload: sort,
});

const filterByActionCreator = (filter: FilterType): FilterByActionType => ({
  type: ActionTypes.SET_FILTER,
  payload: filter,
});

export {
  addTodoActionCreator,
  delTodoActionCreator,
  completedTodoActionCreator,
  filterByActionCreator,
  sortByActionCreator,
};
