import { TextField } from '@material-ui/core';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTodo, updateTodo } from '../../redux/action-creators';
import { Todo } from '../../types';

interface TodoFormProps {
  update?: boolean;
  todo?: Todo;
}

const TodoForm: React.FC<TodoFormProps> = ({ todo, update = false }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState<string>(todo?.content || '');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmpty(content)) {
      return;
    }
    if (update) {
      dispatch(
        updateTodo({
          id: todo?.id || '',
          content,
          done: todo?.done || false
        })
      )
    } else {
      dispatch(
        addTodo({
          id: uuid(),
          content,
          done: false
        })
      );
      setContent('')
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const textAreaOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      onSubmit(e);
    }
  };

  return (
    <form
      onSubmit={onSubmit}>
      <TextField
        id='todo-textfield'
        variant='outlined'
        fullWidth
        value={content}
        onChange={onChange}
        label={update ? null : 'Add todo'}
        onKeyDown={textAreaOnEnter}
      />
    </form>
  )
}

export default TodoForm;