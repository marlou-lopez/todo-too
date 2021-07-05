import configureStore from 'redux-mock-store';
import { closeTodoModal, openTodoModal } from '../../../../app/redux/action-creators';
import { RootState } from '../../../../app/redux/reducers';

const mockStore = configureStore<RootState>();

describe('modalAction unit test', () => {
  const store = mockStore();

  afterEach(() => {
    store.clearActions();
  });

  it('should return OPEN_TODO_MODAL', () => {
    store.dispatch(openTodoModal());
    expect(store.getActions()).toEqual([{
      type: 'OPEN_TODO_MODAL',
    }]);
  });

  it('should return CLOSE_TODO_MODAL', () => {
    store.dispatch(closeTodoModal());
    expect(store.getActions()).toEqual([{
      type: 'CLOSE_TODO_MODAL',
    }]);
  });
});
