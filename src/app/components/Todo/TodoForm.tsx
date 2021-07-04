import { TextField } from '@material-ui/core';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTodo } from '../../redux/action-creators';

const TodoForm: React.FC<{
  defaultContent?: string
}> = ({defaultContent}) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmpty(content)) {
      return;
    }
    dispatch(
      addTodo({
        id: uuid(),
        content,
        done: false
      })
    )

    setContent('')
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
        multiline
        onChange={onChange}
        label='Add Todo'
        onKeyDown={textAreaOnEnter}
      />
    </form>
  )
}

export default TodoForm;