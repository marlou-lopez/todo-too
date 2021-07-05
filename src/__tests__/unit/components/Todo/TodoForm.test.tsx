import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoForm from '../../../../app/components/Todo/TodoForm';
import { RootState } from '../../../../app/redux/reducers';

const mockStore = configureStore<RootState>();

describe('TodoForm component unit tests', () => {
  const store = mockStore({
    todos: {
      list: [
        {
          id: 'test-id-one',
          content: 'test-content-one',
          done: false,
        },
        {
          id: 'test-id-two',
          content: 'test-content-two',
          done: false,
        },
      ],
      selected: {
        id: 'test-id-two',
        content: 'test-content-two',
        done: false,
      },
    },
    modal: {
      open: false,
    },
  });

  it('should render form', () => {
    const component = mount(
      <Provider store={store}>
        <TodoForm />
      </Provider>,
    );

    expect(component.exists()).toBeTruthy();
  });

  it('should be able to input a value', () => {
    const component = mount(
      <Provider store={store}>
        <TodoForm />
      </Provider>,
    );

    let textField = component.find('#todo-textfield').last();
    textField.simulate('change', {
      target: {
        value: 'test value',
      },
    });

    // re-find component to get changed value
    textField = component.find('#todo-textfield').last();
    expect(textField.prop('value')).toEqual('test value');
  });

  it('should empty the value after submitting when it adding todo', () => {
    const component = mount(
      <Provider store={store}>
        <TodoForm />
      </Provider>,
    );

    let textField = component.find('#todo-textfield').last();
    textField.simulate('change', {
      target: {
        value: 'test value',
      },
    });

    // re-find component to get changed value
    textField = component.find('#todo-textfield').last();
    expect(textField.prop('value')).toEqual('test value');

    // Submit value by enter
    textField.simulate('keydown', {
      key: 'Enter',
    });

    // re-find component to get changed value
    textField = component.find('#todo-textfield').last();
    expect(textField.prop('value')).toEqual('');
  });

  it('should not empty the value after submitting when it updating todo', () => {
    const component = mount(
      <Provider store={store}>
        <TodoForm
          todo={{
            id: 'test-id',
            content: 'test',
            done: false,
          }}
          update
        />
      </Provider>,
    );

    let textField = component.find('#todo-textfield').last();
    textField.simulate('change', {
      target: {
        value: 'test value',
      },
    });

    // re-find component to get changed value
    textField = component.find('#todo-textfield').last();
    expect(textField.prop('value')).toEqual('test value');

    // Submit value by enter
    textField.simulate('keydown', {
      key: 'Enter',
    });

    // re-find component to get changed value
    textField = component.find('#todo-textfield').last();
    expect(textField.prop('value')).toEqual('test value');
  });

  it('should not display label when updating todo', () => {
    const component = mount(
      <Provider store={store}>
        <TodoForm
          todo={{
            id: 'test-id',
            content: 'test',
            done: false,
          }}
          update
        />
      </Provider>,
    );

    const textField = component.find('#todo-textfield').first();
    expect(textField.prop('label')).toBeNull();
  });

  it('should display label when updating todo', () => {
    const component = mount(
      <Provider store={store}>
        <TodoForm />
      </Provider>,
    );

    const textField = component.find('#todo-textfield').first();
    expect(textField.prop('label')).not.toBeNull();
    expect(textField.prop('label')).toEqual('Add todo');
  });
});
