import { TodosType, TodoType } from '../data/todos';

type SortType = 'title' | 'user' | 'completed' | null;

type FilterType = 'completed' | 'uncompleted' | null;

type StateType = {
  todos: TodosType;
  maxId: number;
  searchedId: number | null;
  sortBy: SortType;
  filterBy: FilterType;
};

export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  DEL_TODO = 'DEL_TODO',
  CHANGE_TODO = 'CHANGE_TODO',
  SET_SEARCH_ID = 'SET_SEARCH_ID',
  SET_SORT = 'SET_SORT',
  SET_FILTER = 'SET_FILTER',
}

type AddTodoActionType = {
  type: ActionTypes.ADD_TODO;
  payload: Omit<TodoType, 'id'>;
};

type DelTodoActionType = {
  type: ActionTypes.DEL_TODO;
  payload: number;
};

type ChangeTodoActionType = {
  type: ActionTypes.CHANGE_TODO;
  payload: TodoType;
};

type SearchIdActionType = {
  type: ActionTypes.SET_SEARCH_ID;
  payload: number;
};

type SortByActionType = {
  type: ActionTypes.SET_SORT;
  payload: SortType;
};

type FilterByActionType = {
  type: ActionTypes.SET_FILTER;
  payload: FilterType;
};

export type {
  AddTodoActionType,
  DelTodoActionType,
  ChangeTodoActionType,
  SearchIdActionType,
  SortByActionType,
  FilterByActionType,
  StateType,
  FilterType,
  SortType,
};

export type TodoActionsType =
  | AddTodoActionType
  | DelTodoActionType
  | ChangeTodoActionType
  | SearchIdActionType
  | SortByActionType
  | FilterByActionType;
