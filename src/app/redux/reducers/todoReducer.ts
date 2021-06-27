import { TodoAction } from "../actions/todoAction"
import { TodoActionTypes } from "../action-types"
import { Todo } from "../../types"

interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: []
}

const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch(action.type) {
    case TodoActionTypes.ADD_TODO: {
      console.log('test');
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    }
    case TodoActionTypes.UPDATE_TODO: {
      const temp = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          return action.payload
        }
        return todo
      })
      return {
        ...state,
        todos: temp
      }
    }
    case TodoActionTypes.DELETE_TODO: {
      const temp = state.todos.filter((todo) => {
        return todo.id !== action.payload.id
      });
      return {
        ...state,
        todos: temp,
      }
    }
    case TodoActionTypes.TOGGLE_TODO: {
      const temp = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })
      return {
        ...state,
        todos: temp
      }
    }
    default:
      return state;
  }
}

export default todoReducer;