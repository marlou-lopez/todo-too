import { createStyles, Grid, makeStyles, Paper, Theme, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTodo } from '../../redux/action-creators';

const useStyle = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      height: theme.spacing(100),
    },
    form: {
      width: 'inherit',
      padding: theme.spacing(1)
    }
  })
})

const TodoForm: React.FC = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [content, setContent] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuid(),
        content,
        done: false
      })
    )

    setContent('')
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  return (
    <Paper>
      <Grid
        container
        justify='center'
        alignItems='center'
        classes={{
          root: classes.container
        }}
      >
        <form
          className={classes.form}
          onSubmit={onSubmit}>
          <TextField
            variant='outlined'
            fullWidth
            value={content}
            onChange={onChange}
            label='Add Todo'  
          />
        </form>
      </Grid>
    </Paper>
  )
}

export default TodoForm;