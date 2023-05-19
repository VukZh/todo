import { FC } from 'react';
import {
  Autocomplete,
  Grid,
  MenuItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { todos } from '../data/todos';
import { Edit } from './edit';

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
  return (
    <>
      <Grid xs={1}>
        <Edit edit={false} />
      </Grid>
      <Grid xs={3}>
        <Autocomplete
          disablePortal
          id='combo-box-demo'
          options={todos}
          getOptionLabel={(option) => option.title}
          onChange={(e) => {
            const option = e.target as HTMLElement;
            const fff = todos.find((todo) => todo.title === option.innerHTML);
            console.log(fff.id);
          }}
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
          onChange={(e) => {
            const option = e.target as HTMLInputElement;
            console.log(option.value);
          }}
        >
          <ToggleButton value='title'>Sort by title</ToggleButton>
          <ToggleButton value='completed'>Sort by completed</ToggleButton>
          <ToggleButton value='user'>Sort by user</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  );
};
