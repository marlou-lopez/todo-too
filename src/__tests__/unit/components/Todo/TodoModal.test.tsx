import { shallow } from "enzyme"
import TodoForm from "../../../../app/components/Todo/TodoForm";
import TodoModal from "../../../../app/components/Todo/TodoModal"
import { Todo } from "../../../../app/types";

describe('TodoModal component unit test', () => {
  it('should pass selectedTodo to todoform component', () => {
    const selectedTodo: Todo = {
      id: 'test-id',
      content: 'test-content-one',
      done: false
    }
    const component = shallow(
      <TodoModal
        open={false}
        handleCloseModal={jest.fn()}
        selectedTodo={selectedTodo}
      />
    );
    const todoForm = component.find(TodoForm);
    expect(todoForm.prop('todo')).toEqual(selectedTodo)
  })
})