import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoItem from '../../../../app/components/Todo/TodoItem';
import TodoList from '../../../../app/components/Todo/TodoList';
import { RootState } from '../../../../app/redux/reducers';

const mockStore = configureStore<RootState>();

describe('TodoList component unit tests', () => {
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
        id: '',
        content: '',
        done: false,
      },
    },
    modal: {
      open: false,
    },
  });

  it('should render list', () => {
    const component = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    );
    const todoItems = component.find(TodoItem);
    expect(todoItems.length).toEqual(2);
  });
});
