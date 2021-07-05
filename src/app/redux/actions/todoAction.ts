import { Todo } from '../../types';
import TodoActionTypes from '../action-types/todo';

interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO,
  payload: Todo
}

interface UpdateTodoAction {
  type: TodoActionTypes.UPDATE_TODO,
  payload: Todo
}

interface DeleteTodoAction {
  type: TodoActionTypes.DELETE_TODO,
  payload: {
    id: string;
  }
}

interface ToggleTodoAction {
  type: TodoActionTypes.TOGGLE_TODO,
  payload: {
    id: string;
  }
}
interface SelectTodoAction {
  type: TodoActionTypes.SELECT_TODO,
  payload: Todo
}

interface UnselectTodoAction {
  type: TodoActionTypes.UNSELECT_TODO
}

export type TodoAction =
  AddTodoAction
  | UpdateTodoAction
  | DeleteTodoAction
  | ToggleTodoAction
  | SelectTodoAction
  | UnselectTodoAction;
