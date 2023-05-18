import { Card, Icon, IconButton, styled } from '@mui/material';
import { FC } from 'react';
import { TodoType } from '../data/todos';

export const Todo: FC<TodoType> = ({ id, title, completed }) => {
  const Todo = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
  }));
  const editHandler = (e) => console.log(e, id);
  return (
    <Todo>
      {title}
      <div>
        <IconButton onClick={editHandler}>
          <Icon>edit_note</Icon>
        </IconButton>
        <IconButton>
          {completed ? <Icon>check_circle</Icon> : <Icon>unpublished</Icon>}
        </IconButton>
        <IconButton>
          <Icon>delete</Icon>
        </IconButton>
      </div>
    </Todo>
  );
};
