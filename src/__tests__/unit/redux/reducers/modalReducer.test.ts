import { closeTodoModal, openTodoModal } from "../../../../app/redux/action-creators";
import modalReducer, { ModalState } from "../../../../app/redux/reducers/modalReducer"

const initialState: ModalState = {
  open: false
}

describe('modalReducer unit test', () => {
  it('should return the initial state', () => {
    expect(modalReducer(undefined, {} as any)).toEqual(initialState)
  });

  it('should handle opening of todo modal', () => {
    const previousState: ModalState = {
      open: false
    };
    expect(modalReducer(previousState, openTodoModal())).toEqual({
      open: true
    })
  });

  it('should handle closing of todo modal', () => {
    const previousState: ModalState = {
      open: true
    };
    expect(modalReducer(previousState, closeTodoModal())).toEqual({
      open: false
    })
  })
})