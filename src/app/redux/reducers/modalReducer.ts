import ModalActionTypes from '../action-types/modal';
import { ModalAction } from '../actions/modalAction';

export type ModalState = {
  open: boolean;
};

const initialState: ModalState = {
  open: false,
};

const modalReducer = (
  state = initialState,
  action: ModalAction,
): ModalState => {
  switch (action.type) {
    case ModalActionTypes.OPEN_TODO_MODAL: {
      return {
        ...state,
        open: true,
      };
    }
    case ModalActionTypes.CLOSE_TODO_MODAL: {
      return {
        ...state,
        open: false,
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
