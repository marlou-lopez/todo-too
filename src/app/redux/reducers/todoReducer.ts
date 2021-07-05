import { TodoAction } from "../actions/todoAction"
import { TodoActionTypes } from "../action-types"
import { Todo } from "../../types"

export type TodoState = {
  list: Todo[],
  selected: Todo
}

const initialState: TodoState = {
  list: [],
  selected: {
    id: '',
    content: '',
    done: false
  }
}

const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch(action.type) {
    case TodoActionTypes.ADD_TODO: {
      return {
        ...state,
        list: [...state.list, action.payload
      ]
    }
    }
    case TodoActionTypes.UPDATE_TODO: {
      const temp = state.list.map((todo) => {
        if (action.payload.id === todo.id) {
          return action.payload
        }
        return todo
      })
      return {
        ...state,
        list: temp
      };
    }
    case TodoActionTypes.DELETE_TODO: {
      const temp = state.list.filter((todo) => {
        return todo.id !== action.payload.id
      });
      return {
        ...state,
        list: temp
      };
    }
    case TodoActionTypes.TOGGLE_TODO: {
      const temp = state.list.map((todo) => {
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
        list: temp
      }
    }
    case TodoActionTypes.SELECT_TODO: {
      return {
        ...state,
        selected: action.payload
      }
    }
    case TodoActionTypes.UNSELECT_TODO: {
      return {
        ...state,
        selected: {
          id: '',
          content: '',
          done: false
        }
      }
    }
    default:
      return state;
  }
}

export default todoReducer;