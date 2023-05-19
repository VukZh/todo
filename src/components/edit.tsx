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

type EditPropTypes = {
  edit: boolean;
};

export const Edit: FC<EditPropTypes> = ({ edit }) => {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState<string>('');

  const [userId, setUserId] = useState<number>(0);

  const [completed, setCompleted] = useState<boolean>(false);

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
      e.target[2].value
    );
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        {edit ? <Icon>edit_note</Icon> : <Icon>add_box</Icon>}
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change to-do</DialogTitle>
        <form onSubmit={handleSave}>
          <DialogContent>
            <Stack spacing={2}>
              <TextField
                label='Title'
                type='text'
                variant='standard'
                style={{ width: '350px' }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                label='UserId'
                type='number'
                variant='standard'
                value={userId}
                onChange={(e) => setUserId(+e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={completed}
                    onChange={(e) => setCompleted(!!e.target.value)}
                  />
                }
                label='Completed'
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit' disabled={!title || !userId}>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
