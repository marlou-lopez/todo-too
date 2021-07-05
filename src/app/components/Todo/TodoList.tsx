import React from 'react';
import {
  Grid, makeStyles, Theme, createStyles,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypedSelector';
import {
  closeTodoModal, deleteTodo, openTodoModal, selectTodo, toggleTodo, unselectTodo,
} from '../../redux/action-creators';
import TodoItem from './TodoItem';
import TodoModal from './TodoModal';

const useStyle = makeStyles((theme: Theme) => createStyles({
  list: {
    '& > div:not(:first-child)': {
      marginTop: theme.spacing(1),
    },
  },
}));

const TodoList: React.FC = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const todos = useTypedSelector((state) => state.todos.list);
  const modalState = useTypedSelector((state) => state.modal.open);
  const selectedTodo = useTypedSelector((state) => state.todos.selected);
  return (
    <Grid className={classes.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={() => {
            dispatch(deleteTodo(todo.id));
          }}
          handleToggle={() => {
            dispatch(toggleTodo(todo.id));
          }}
          handleSelection={() => {
            dispatch(openTodoModal());
            dispatch(selectTodo(todo));
          }}
        />
      ))}
      <TodoModal
        open={modalState}
        handleCloseModal={() => {
          dispatch(closeTodoModal());
          dispatch(unselectTodo());
        }}
        selectedTodo={selectedTodo}
      />
    </Grid>
  );
};

export default TodoList;
