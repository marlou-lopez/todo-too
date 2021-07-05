import React from 'react';
import {
  Paper, createStyles, Grid, makeStyles, Theme, Divider,
} from '@material-ui/core';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const useStyle = makeStyles((theme: Theme) => createStyles({
  paper: {
    height: theme.spacing(100),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    marginBottom: theme.spacing(2),
    flexShrink: 0,
  },
  list: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: theme.spacing(1),
    },
    '&::-webkit-scrollbar-track': {
      background: theme.palette.grey[300],
      borderRadius: theme.spacing(0.5),
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
      borderRadius: theme.spacing(0.5),
    },
  },
}));

const TodoContainer: React.FC = () => {
  const classes = useStyle();
  return (
    <>
      <h3 id="todo-app-title">Todo Too</h3>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid item className={classes.form}>
              <TodoForm />
            </Grid>
            <Divider />
            <Grid item className={classes.list}>
              <TodoList />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default TodoContainer;
