import { Grid } from '@material-ui/core';
import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer: React.FC = () => {
  return (
    <React.Fragment>
      <h3>Todo Too</h3>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TodoForm />
        </Grid>
        <Grid item xs={6}>
          <TodoList />
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default TodoContainer;