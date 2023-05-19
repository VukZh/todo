import { Stack, Grid } from '@mui/material';
import { FC } from 'react';
import { Controls } from './components/controls';
import { Todo } from './components/todo';
import { todos } from './data/todos';
import { Edit } from './components/edit';

const App: FC = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <h1>To-do</h1>
      </Grid>
      <Controls />
      <Edit edit={true} />
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
