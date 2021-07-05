import { Todo } from '../../types';
import TodoActionTypes from '../action-types/todo';
import ModalActionTypes from '../action-types/modal';
import { TodoAction } from '../actions';
import { ModalAction } from '../actions/modalAction';

export const addTodo = (todo: Todo): TodoAction => ({
  type: TodoActionTypes.ADD_TODO,
  payload: todo,
});

export const updateTodo = (todo: Todo): TodoAction => ({
  type: TodoActionTypes.UPDATE_TODO,
  payload: todo,
});

export const deleteTodo = (id: string): TodoAction => ({
  type: TodoActionTypes.DELETE_TODO,
  payload: {
    id,
  },
});

export const toggleTodo = (id: string): TodoAction => ({
  type: TodoActionTypes.TOGGLE_TODO,
  payload: {
    id,
  },
});

export const selectTodo = (todo: Todo): TodoAction => ({
  type: TodoActionTypes.SELECT_TODO,
  payload: todo,
});

export const unselectTodo = (): TodoAction => ({
  type: TodoActionTypes.UNSELECT_TODO,
});

export const openTodoModal = (): ModalAction => ({
  type: ModalActionTypes.OPEN_TODO_MODAL,
});

export const closeTodoModal = (): ModalAction => ({
  type: ModalActionTypes.CLOSE_TODO_MODAL,
});
