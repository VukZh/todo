import { FC } from 'react';
import {
  Autocomplete,
  Grid,
  MenuItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Edit } from './edit';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import {
  filterByActionCreator,
  searchIdActionCreator,
  sortByActionCreator,
} from '../state/actions';
import { FilterType } from '../state/types';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Todo } from './todo';

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
  const sortBy = useTypedSelector((state) => state.sortBy);
  const todos = useTypedSelector((state) => state.todos);

  const foundedId = useTypedSelector((state) => state.searchedId);

  const foundTodo = foundedId
    ? todos.find((todo) => todo.id === foundedId)
    : null;

  const dispatch = useTypedDispatch();
  const changeFilterHandler = (e) =>
    dispatch(filterByActionCreator(e.target.value as FilterType));

  const changeSortHandler = (e) => {
    const option = e.target?.value ? e.target?.value : null;
    dispatch(sortByActionCreator(option));
  };

  const searchHandler = (e) => {
    const option = e.target as HTMLElement;
    const found = todos.find((todo) => todo.title === option.innerHTML);
    dispatch(searchIdActionCreator(found.id));
  };

  return (
    <>
      <Grid item xs={1}>
        <Edit edit={false} />
        <div style={{ display: 'inline-block', marginTop: '1rem' }}>
          Add to-do
        </div>
      </Grid>
      <Grid item xs={3}>
        <Autocomplete
          disablePortal
          id='searchTodo'
          options={todos}
          getOptionLabel={(option) => option.title}
          onChange={searchHandler}
          renderInput={(params) => <TextField {...params} label='Search' />}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          fullWidth
          id='filtered-completed'
          select
          label='Filtered completed'
          defaultValue='both'
          onChange={changeFilterHandler}
        >
          {completedOptions.map((todo) => (
            <MenuItem key={todo.value} value={todo.value}>
              {todo.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <ToggleButtonGroup
          size='large'
          color='primary'
          value={sortBy}
          exclusive
          aria-label='Platform'
          onChange={changeSortHandler}
        >
          <ToggleButton value='title'>Sort by title</ToggleButton>
          <ToggleButton value='completed'>Sort by completed</ToggleButton>
          <ToggleButton value='user'>Sort by user</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      {foundedId & foundTodo?.id ? (
        <Grid item xs={12}>
          <div>Found: </div>
          <Todo
            id={foundTodo.id}
            title={foundTodo.title}
            userId={foundTodo.userId}
            completed={foundTodo.completed}
          />
        </Grid>
      ) : null}
    </>
  );
};
