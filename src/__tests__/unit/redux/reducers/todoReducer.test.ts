import { addTodo, deleteTodo, toggleTodo } from "../../../../app/redux/action-creators";
import todoReducer, { TodoState } from "../../../../app/redux/reducers/todoReducer"

const initialState: TodoState = []

describe('todoReducer unit test', () => {
  it('should return the initial state', () => {
    expect(todoReducer(undefined, {} as any)).toEqual(initialState)
  });

  it('should handle adding of todo', () => {
    const previousState: TodoState = []
    expect(todoReducer(previousState, addTodo({
      id: 'test-id-one',
      content: 'test-content-one',
      done: false
    }))).toEqual([{
      id: 'test-id-one',
      content: 'test-content-one',
      done: false
    }])
  });

  it('should handle deleting of todo', () => {
    const previousState: TodoState = [{
      id: 'test-id-one',
      content: 'test-content-one',
      done: false
    }]
    expect(todoReducer(previousState, deleteTodo('test-id-one'))).toEqual([])
  });

  it('should handle toggling of todo', () => {
    const previousState: TodoState = [{
      id: 'test-id-one',
      content: 'test-content-one',
      done: false
    }, {
      id: 'test-id-two',
      content: 'test-content-two',
      done: false
    }]
    expect(todoReducer(previousState, toggleTodo('test-id-one'))).toEqual([{
      id: 'test-id-one',
      content: 'test-content-one',
      done: true
    }, {
      id: 'test-id-two',
      content: 'test-content-two',
      done: false
    }]);
  });
})