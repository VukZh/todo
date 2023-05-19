import { Grid } from '@mui/material';
import { FC } from 'react';
import { Controls } from './components/controls';
import { Todos } from './components/todos';

const App: FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h1 style={{ textAlign: 'center' }}>To-do app</h1>
      </Grid>
      <Controls />
      <Todos />
    </Grid>
  );
};

export default App;
