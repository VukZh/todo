import { Card, Icon, IconButton, styled } from '@mui/material';
import { FC } from 'react';
import { TodoType } from '../data/todos';
import { Edit } from './edit';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { delTodoActionCreator } from '../state/actions';

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

  const dispatch = useTypedDispatch();
  const delHandler = () => dispatch(delTodoActionCreator(id));

  return (
    <Todo>
      {title}
      <div>
        <Edit edit={true} />
        <IconButton>
          {completed ? <Icon>check_circle</Icon> : <Icon>unpublished</Icon>}
        </IconButton>
        <IconButton onClick={delHandler}>
          <Icon>delete</Icon>
        </IconButton>
      </div>
    </Todo>
  );
};
