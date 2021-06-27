import { Todo } from "../../types";
import { TodoActionTypes } from "../action-types";

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



export type TodoAction = AddTodoAction | UpdateTodoAction | DeleteTodoAction | ToggleTodoAction;