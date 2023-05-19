import { Card, Icon, IconButton, styled } from '@mui/material';
import { FC } from 'react';
import { TodoType } from '../data/todos';
import { Edit } from './edit';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import {
  completedTodoActionCreator,
  delTodoActionCreator,
} from '../state/actions';

export const Todo: FC<TodoType> = ({ id, title, completed, userId }) => {
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

  const changeCompleteHandler = () =>
    dispatch(
      completedTodoActionCreator({
        id: id,
        completed: !completed,
      })
    );

  return (
    <Todo
      style={
        completed
          ? { backgroundColor: 'lightgreen' }
          : { backgroundColor: 'lightpink' }
      }
    >
      {title}
      <div>
        <Edit
          edit={true}
          id={id}
          title={title}
          userId={userId}
          completed={completed}
        />
        <IconButton onClick={changeCompleteHandler}>
          {completed ? <Icon>check_circle</Icon> : <Icon>unpublished</Icon>}
        </IconButton>
        <IconButton onClick={delHandler}>
          <Icon>delete</Icon>
        </IconButton>
      </div>
    </Todo>
  );
};
