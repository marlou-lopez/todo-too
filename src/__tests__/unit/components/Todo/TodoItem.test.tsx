import { mount, shallow } from 'enzyme';
import TodoItem from '../../../../app/components/Todo/TodoItem'

describe('TodoItem component unit tests', () => {
  it('should render todo item', () => {
    const component = shallow(
      <TodoItem
        id='test-id'
        content='test-content'
        done={false}
        handleDelete={jest.fn()}
        handleToggle={jest.fn()}
      />
    );
    const content = component.find('#content-test-id');
    expect(content.text()).toEqual('test-content')
  });

  it('should strike-through content when done is true', () => {
    const component = shallow(
      <TodoItem
        id='test-id'
        content='test-content'
        done
        handleDelete={jest.fn()}
        handleToggle={jest.fn()}
      />
    );
    const content = component.find('#content-test-id');
    expect(content.prop('style')).toEqual({
      textDecoration: 'line-through' 
    });
  })

  it('should open more menu when vertical menu is clicked', () => {
    const component = shallow(
      <TodoItem
        id='test-id'
        content='test-content'
        done
        handleDelete={jest.fn()}
        handleToggle={jest.fn()}
      />
    );
    const moreMenuClose = component.find('#more-menu-test-id');
    const moreMenuBtn = component.find('#vertical-menu-test-id');

    expect(moreMenuClose.prop('className')).not.toContain('expanded')
    moreMenuBtn.simulate('click');

    const moreMenuOpen = component.find('#more-menu-test-id');
    expect(moreMenuOpen.prop('className')).toContain('expanded')
  });

  it('should close more menu when close menu button is clicked', () => {
    const component = shallow(
      <TodoItem
        id='test-id'
        content='test-content'
        done
        handleDelete={jest.fn()}
        handleToggle={jest.fn()}
      />
    );
    const moreMenuBtn = component.find('#vertical-menu-test-id');
    moreMenuBtn.simulate('click');

    const moreMenuOpen = component.find('#more-menu-test-id');
    expect(moreMenuOpen.prop('className')).toContain('expanded');

    const closeBtn = component.find('#close-icon-test-id');
    closeBtn.simulate('click');

    const moreMenuClose = component.find('#more-menu-test-id');
    expect(moreMenuClose.prop('className')).not.toContain('expanded');
  });

  it('should call handleToggle when radio button is clicked', () => {
    const handleToggleSpy = jest.fn();
    const component = shallow(
      <TodoItem
        id='test-id'
        content='test-content'
        done
        handleDelete={jest.fn()}
        handleToggle={handleToggleSpy}
      />
    );

    const radioBtn = component.find('#unchecked-circle-test-id');
    radioBtn.simulate('click');

    expect(handleToggleSpy).toHaveBeenCalled();
    expect(handleToggleSpy).toHaveBeenCalledWith('test-id');
  });

  it('should call handleDelete when delete button is clicked', () => {
    const handleDeleteSpy = jest.fn();
    const component = shallow(
      <TodoItem
        id='test-id'
        content='test-content'
        done
        handleDelete={handleDeleteSpy}
        handleToggle={jest.fn()}
      />
    );

    const moreMenuBtn = component.find('#vertical-menu-test-id');    
    moreMenuBtn.simulate('click');

    const deleteBtn = component.find('#delete-icon-test-id');
    deleteBtn.simulate('click');

    expect(handleDeleteSpy).toHaveBeenCalled();
    expect(handleDeleteSpy).toHaveBeenCalledWith('test-id');
  });
})