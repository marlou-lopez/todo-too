import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTodo } from '../../redux/action-creators';
import TodoList from './TodoList';

const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={content} onChange={onChange}/>
        <button type='submit'>Submit</button>
      </form>
      <TodoList />
    </div>
  )
};

export default TodoContainer;