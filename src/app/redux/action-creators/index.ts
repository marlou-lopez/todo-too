import { Todo } from "../../types"
import { TodoActionTypes } from "../action-types"
import { ModalActionTypes } from "../action-types/modal"
import { TodoAction } from "../actions"
import { ModalAction } from "../actions/modalAction"

export const addTodo = (todo: Todo): TodoAction => {
  return {
    type: TodoActionTypes.ADD_TODO,
    payload: todo
  }
}

export const updateTodo = (todo: Todo): TodoAction => {
  return {
    type: TodoActionTypes.UPDATE_TODO,
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

export const selectTodo = (todo: Todo): TodoAction => {
  return {
    type: TodoActionTypes.SELECT_TODO,
    payload: todo
  }
}

export const unselectTodo = (): TodoAction => {
  return {
    type: TodoActionTypes.UNSELECT_TODO,
  }
}

export const openTodoModal = (): ModalAction => {
  return {
    type: ModalActionTypes.OPEN_TODO_MODAL,
  }
}

export const closeTodoModal = (): ModalAction => {
  return {
    type: ModalActionTypes.CLOSE_TODO_MODAL,
  }
}