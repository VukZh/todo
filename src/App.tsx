import { Stack, Grid } from '@mui/material';
import { FC } from 'react';
import { Controls } from './components/controls';
import { Todo } from './components/todo';
import { useTypedSelector } from './hooks/useTypedSelector';

const App: FC = () => {
  const todos = useTypedSelector((state) => state.todos);

  return (
    <Grid container>
      <Grid xs={12}>
        <h1>To-do</h1>
      </Grid>
      <Controls />
      <Grid xs={12}>
        <Stack spacing={2}>
          {todos.map((todo) => (
            <Todo
              completed={todo.completed}
              id={todo.id}
              title={todo.title}
              userId={todo.userId}
            ></Todo>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default App;
