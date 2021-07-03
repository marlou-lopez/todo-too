import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import TodoForm from '../../../../app/components/Todo/TodoForm'
import { RootState } from '../../../../app/redux/reducers';

const mockStore = configureStore<RootState>();

describe('TodoForm component unit tests', () => {
  const store = mockStore({
    todos: {
      todos: [
        {
          id: 'test-id-one',
          content: 'test-content-one',
          done: false,
        },
        {
          id: 'test-id-two',
          content: 'test-content-two',
          done: false
        }
      ]
    }
  });

  it('should render form', () => {
    const component = mount(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    expect(component.exists()).toBeTruthy();
  });

  it('should be able to input a value', () => {
    const component = mount(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    let textField = component.find('#todo-textfield').last();
    textField.simulate('change', {
      target: {
        value: 'test value'
      }
    });

    // re-find component to get changed value
    textField = component.find('#todo-textfield').last()
    expect(textField.prop('value')).toEqual('test value')
  });

  it('should empty the value after submitting', () => {
    const component = mount(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    );

    let textField = component.find('#todo-textfield').last();
    textField.simulate('change', {
      target: {
        value: 'test value'
      }
    });

    // re-find component to get changed value
    textField = component.find('#todo-textfield').last()
    expect(textField.prop('value')).toEqual('test value')

    // Submit value by enter
    textField.simulate('keydown', {
      key: 'Enter'
    });

    // re-find component to get changed value
    textField = component.find('#todo-textfield').last()
    expect(textField.prop('value')).toEqual('')
  });
})