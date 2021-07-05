import ModalActionTypes from '../action-types/modal';

interface OpenTodoModalAction {
  type: ModalActionTypes.OPEN_TODO_MODAL,
}

interface CloseTodoModalAction {
  type: ModalActionTypes.CLOSE_TODO_MODAL,
}

export type ModalAction = OpenTodoModalAction | CloseTodoModalAction;
