import { TodosType, TodoType, TodoTypeForAdd } from '../data/todos';

type SortType = 'title' | 'user' | 'completed' | null;

type FilterType = 'completed' | 'uncompleted' | 'both';

type StateType = {
  todos: TodosType;
  maxId: number;
  searchedId: number | null;
  sortBy: SortType;
  filterBy: FilterType;
};

export type CompletedType = Pick<TodoType, 'id' | 'completed'>;

export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  DEL_TODO = 'DEL_TODO',
  CHANGE_TODO = 'CHANGE_TODO',
  SET_SEARCH_ID = 'SET_SEARCH_ID',
  SET_SORT = 'SET_SORT',
  SET_FILTER = 'SET_FILTER',
  SET_COMPLETE = 'SET_COMPLETE',
}

type AddTodoActionType = {
  type: ActionTypes.ADD_TODO;
  payload: TodoTypeForAdd;
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

type CompletedActionType = {
  type: ActionTypes.SET_COMPLETE;
  payload: CompletedType;
};

export type {
  AddTodoActionType,
  DelTodoActionType,
  CompletedActionType,
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
  | CompletedActionType
  | ChangeTodoActionType
  | SearchIdActionType
  | SortByActionType
  | FilterByActionType;
