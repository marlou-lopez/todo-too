import { shallow } from 'enzyme';
import TodoContainer from '../../../../app/components/Todo/TodoContainer';

describe('TodoContainer component unit tests', () => {
  it('should render container', () => {
    const component = shallow(<TodoContainer />);

    const title = component.find('#todo-app-title');
    expect(title.text()).toEqual('Todo Too');
  });
});
