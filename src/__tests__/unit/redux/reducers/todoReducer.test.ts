import { addTodo, deleteTodo, selectTodo, toggleTodo, unselectTodo, updateTodo } from "../../../../app/redux/action-creators";
import todoReducer, { TodoState } from "../../../../app/redux/reducers/todoReducer"

const initialState: TodoState = {
  list: [],
  selected: {
    id: '',
    content: '',
    done: false
  }
}

describe('todoReducer unit test', () => {
  it('should return the initial state', () => {
    expect(todoReducer(undefined, {} as any)).toEqual(initialState)
  });

  it('should handle adding of todo', () => {
    const previousState: TodoState = {
      list: [],
      selected: {
        id: '',
        content: '',
        done: false
      }
    }
    expect(todoReducer(previousState, addTodo({
      id: 'test-id-one',
      content: 'test-content-one',
      done: false
    }))).toEqual({
      list: [{
        id: 'test-id-one',
        content: 'test-content-one',
        done: false
      }],
      selected: {
        id: '',
        content: '',
        done: false
      }
    })
  });

  it('should handle updating of todo', () => {
    const previousState: TodoState = {
      list: [{
        id: 'test-id-one',
        content: 'test-content-one',
        done: false
      }],
      selected: {
        id: '',
        content: '',
        done: false
      }
    }
    expect(todoReducer(previousState, updateTodo({
      id: 'test-id-one',
      content: 'test-content-one-update',
      done: false
    }))).toEqual({
      list: [{
        id: 'test-id-one',
        content: 'test-content-one-update',
        done: false
      }],
      selected: {
        id: '',
        content: '',
        done: false
      }
    })
  });

  it('should handle deleting of todo', () => {
    const previousState: TodoState = {
      list: [{
        id: 'test-id-one',
        content: 'test-content-one',
        done: false
      }],
      selected: {
        id: '',
        content: '',
        done: false
      }
    }
    expect(todoReducer(previousState, deleteTodo('test-id-one'))).toEqual({
      list: [],
      selected: {
        id: '',
        content: '',
        done: false
      }
    })
  });

  it('should handle toggling of todo', () => {
    const previousState: TodoState = {
      list: [{
        id: 'test-id-one',
        content: 'test-content-one',
        done: false
      }, {
        id: 'test-id-two',
        content: 'test-content-two',
        done: false
      }],
      selected: {
        id: '',
        content: '',
        done: false
      }
    }
    expect(todoReducer(previousState, toggleTodo('test-id-one'))).toEqual({
      list: [{
        id: 'test-id-one',
        content: 'test-content-one',
        done: true
      }, {
        id: 'test-id-two',
        content: 'test-content-two',
        done: false
      }],
      selected: {
        id: '',
        content: '',
        done: false
      }
    });
  });
  
  it('should handle selection of todo', () => {
    const previousState: TodoState = {
      list: [{
        id: 'test-id-one',
        content: 'test-content-one',
        done: true
      }, {
        id: 'test-id-two',
        content: 'test-content-two',
        done: false
      }],
      selected: {
        id: '',
        content: '',
        done: false
      }
    }
    expect(todoReducer(previousState, selectTodo({
      id: 'test-id-one',
      content: 'test-content-one',
      done: true
    }))).toEqual({
      list: [{
        id: 'test-id-one',
        content: 'test-content-one',
        done: true
      }, {
        id: 'test-id-two',
        content: 'test-content-two',
        done: false
      }],
      selected: {
        id: 'test-id-one',
        content: 'test-content-one',
        done: true
      }
    })
  });

  it('should handle unselection of todo', () => {
    const previousState: TodoState = {
      list: [{
        id: 'test-id-one',
        content: 'test-content-one',
        done: true
      }, {
        id: 'test-id-two',
        content: 'test-content-two',
        done: false
      }],
      selected: {
        id: 'test-id-one',
        content: 'test-content-one',
        done: true
      }
    }
    expect(todoReducer(previousState, unselectTodo())).toEqual({
      list: [{
        id: 'test-id-one',
        content: 'test-content-one',
        done: true
      }, {
        id: 'test-id-two',
        content: 'test-content-two',
        done: false
      }],
      selected: {
        id: '',
        content: '',
        done: false
      }
    })
  })
})