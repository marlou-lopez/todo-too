import { Todo } from "../../types"
import { TodoActionTypes } from "../action-types"
import { TodoAction } from "../actions"

export const addTodo = (todo: Todo): TodoAction => {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload: todo
  }
}

export const deleteTodo = (id: string): TodoAction => {
  return {
    type: TodoActionTypes.DELETE_TODO,
    payload: {
      id
    }
  }
}

export const toggleTodo = (id: string): TodoAction => {
  return {
    type: TodoActionTypes.TOGGLE_TODO,
    payload: {
      id
    }
  }
}