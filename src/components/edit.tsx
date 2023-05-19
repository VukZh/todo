import { FC, useState } from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Icon,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import {
  addTodoActionCreator,
  changeTodoActionCreator,
} from '../state/actions';
import { TodoType } from '../data/todos';

interface EditPropTypes extends Partial<TodoType> {
  edit: boolean;
}
export const Edit: FC<EditPropTypes> = ({
  edit,
  title,
  userId,
  id,
  completed,
}) => {
  const initialTitle = title ? title : '';
  const initialUserId = userId ? userId : 1;
  const initialCompleted = completed ? completed : false;

  const [open, setOpen] = useState(false);

  const [_title, set_title] = useState<string>(initialTitle);

  const [_userId, set_userId] = useState<number>(initialUserId);

  const [_completed, set_completed] = useState<boolean>(initialCompleted);

  const dispatch = useTypedDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(
      'form data: ',
      e.target[0].value,
      e.target[1].value,
      e.target[2].checked
    );

    if (!edit) {
      dispatch(
        addTodoActionCreator({
          title: e.target[0].value,
          userId: +e.target[1].value,
          completed: e.target[2].checked,
        })
      );
      set_title('');
      set_userId(1);
      set_completed(false);
    } else if (id) {
      dispatch(
        changeTodoActionCreator({
          id: id,
          title: e.target[0].value,
          userId: +e.target[1].value,
          completed: e.target[2].checked,
        })
      );
    }
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        {edit ? <Icon>edit_note</Icon> : <Icon>add_box</Icon>}
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`${edit ? 'Change' : 'Add'} to-do`}</DialogTitle>
        <form onSubmit={handleSave}>
          <DialogContent>
            <Stack spacing={2}>
              <TextField
                label='Title'
                type='text'
                variant='standard'
                style={{ width: '350px' }}
                value={_title}
                onChange={(e) => set_title(e.target.value)}
              />
              <TextField
                label='UserId'
                type='number'
                variant='standard'
                value={_userId}
                onChange={(e) => set_userId(+e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={_completed}
                    onChange={(e) => set_completed(e.target.checked)}
                  />
                }
                label='Completed'
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit' disabled={!_title || !_userId}>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
