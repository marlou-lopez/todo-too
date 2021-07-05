import configureStore from 'redux-mock-store';
import { addTodo, deleteTodo, selectTodo, toggleTodo, unselectTodo } from '../../../../app/redux/action-creators';
import { RootState } from '../../../../app/redux/reducers';

const mockStore = configureStore<RootState>()

describe('todoActions unit test', () => {
  const store = mockStore();

  afterEach(() => {
    store.clearActions()
  })
  it('should return ADD_TODO action', () => {
    store.dispatch(addTodo({
      id: 'test-id',
      content: 'test-content',
      done: false
    }));
    expect(store.getActions()).toEqual([{
      type: 'ADD_TODO',
      payload: {
        id: 'test-id',
        content: 'test-content',
        done: false
      }
    }])
  });

  it('should return DELETE_TODO action', () => {
    store.dispatch(deleteTodo('test-id'));
    expect(store.getActions()).toEqual([{
      type: 'DELETE_TODO',
      payload: {
        id: 'test-id',
      }
    }])
  });

  it('should return TOGGLE_TODO action', () => {
    store.dispatch(toggleTodo('test-id'));
    expect(store.getActions()).toEqual([{
      type: 'TOGGLE_TODO',
      payload: {
        id: 'test-id',
      }
    }])
  });

  it('should return SELECT_TODO action', () => {
    store.dispatch(selectTodo({
      id: 'test-id',
      content: 'test-content',
      done: false
    }));
    expect(store.getActions()).toEqual([{
      type: 'SELECT_TODO',
      payload: {
        id: 'test-id',
        content: 'test-content',
        done: false
      }
    }])
  })

  it('should return UNSELECT_TODO action', () => {
    store.dispatch(unselectTodo());
    expect(store.getActions()).toEqual([{
      type: 'UNSELECT_TODO',
    }])
  })
})