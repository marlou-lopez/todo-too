import { TodoAction } from "../actions/todoAction"
import { TodoActionTypes } from "../action-types"
import { Todo } from "../../types"

export type TodoState = Todo[]

const initialState: TodoState = []

const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch(action.type) {
    case TodoActionTypes.ADD_TODO: {
      return [
        ...state,
        action.payload
      ]
    }
    case TodoActionTypes.UPDATE_TODO: {
      const temp = state.map((todo) => {
        if (action.payload.id === todo.id) {
          return action.payload
        }
        return todo
      })
      return temp;
    }
    case TodoActionTypes.DELETE_TODO: {
      const temp = state.filter((todo) => {
        return todo.id !== action.payload.id
      });
      return temp;
    }
    case TodoActionTypes.TOGGLE_TODO: {
      const temp = state.map((todo) => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })
      return temp
    }
    default:
      return state;
  }
}

export default todoReducer;