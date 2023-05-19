import { Grid, Stack } from '@mui/material';
import { Todo } from './todo';
import { FC } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { FilterType, SortType } from '../state/types';

export const Todos: FC = () => {
  const todos = useTypedSelector((state) => state.todos);
  const filter: FilterType = useTypedSelector((state) => state.filterBy);
  const sort: SortType = useTypedSelector((state) => state.sortBy);
  const filteredTodos =
    filter === 'completed'
      ? todos.filter((todo) => todo.completed)
      : filter === 'uncompleted'
      ? todos.filter((todo) => !todo.completed)
      : todos;
  const filteredAndSortTodos =
    sort === 'title'
      ? filteredTodos.sort((t1, t2) => {
          if (t1.title.toLowerCase() < t2.title.toLowerCase()) return -1;
          if (t1.title.toLowerCase() > t2.title.toLowerCase()) return 1;
          return 0;
        })
      : sort === 'completed'
      ? filteredTodos.sort((t1) => {
          if (t1.completed) {
            return -1;
          }
          return 1;
        })
      : sort === 'user'
      ? filteredTodos.sort((t1, t2) => t1.userId - t2.userId)
      : filteredTodos;
  return (
    <Grid item xs={12}>
      <h3>Total todos: {filteredAndSortTodos.length}</h3>
      <Stack spacing={3}>
        {filteredAndSortTodos.map((todo) => (
          <Todo
            completed={todo.completed}
            id={todo.id}
            title={todo.title}
            userId={todo.userId}
            key={todo.id}
          ></Todo>
        ))}
      </Stack>
    </Grid>
  );
};
