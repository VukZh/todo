import { Grid, Stack } from '@mui/material';
import { Todo } from './todo';
import { FC } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { FilterType } from '../state/types';

export const Todos: FC = () => {
  const todos = useTypedSelector((state) => state.todos);
  const filter: FilterType = useTypedSelector((state) => state.filterBy);
  const filteredTodos =
    filter === 'completed'
      ? todos.filter((todo) => todo.completed)
      : filter === 'uncompleted'
      ? todos.filter((todo) => !todo.completed)
      : todos;

  return (
    <Grid item xs={12}>
      <Stack spacing={3}>
        {filteredTodos.map((todo) => (
          <Todo
            completed={todo.completed}
            id={todo.id}
            title={todo.title}
            userId={todo.userId}
          ></Todo>
        ))}
      </Stack>
    </Grid>
  );
};
