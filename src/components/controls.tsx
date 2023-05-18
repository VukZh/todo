import { FC } from 'react';
import {
  Autocomplete,
  Grid,
  Icon,
  IconButton,
  MenuItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { todos } from '../data/todos';

const completedOptions = [
  {
    value: 'both',
    label: 'Both',
  },
  {
    value: 'completed',
    label: 'Completed',
  },
  {
    value: 'uncompleted',
    label: 'Uncompleted',
  },
];

export const Controls: FC = () => {
  const todos_title = todos.map((todo) => todo.title);
  return (
    <>
      <Grid xs={1}>
        <IconButton>
          <Icon>add_box</Icon>
        </IconButton>
      </Grid>
      <Grid xs={3}>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={todos_title}
          renderInput={(params) => <TextField {...params} label='Search' />}
        />
      </Grid>
      <Grid xs={2}>
        <TextField
          fullWidth
          id='filtered-completed'
          select
          label='Filtered completed'
          defaultValue='both'
        >
          {completedOptions.map((todo) => (
            <MenuItem key={todo.value} value={todo.value}>
              {todo.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid xs={6}>
        <ToggleButtonGroup
          color='primary'
          value='title'
          exclusive
          aria-label='Platform'
        >
          <ToggleButton value='title'>Sort by title</ToggleButton>
          <ToggleButton value='completed'>Sort by completed</ToggleButton>
          <ToggleButton value='user'>Sort by user</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  );
};
