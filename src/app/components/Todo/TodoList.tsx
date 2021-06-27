import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { deleteTodo, toggleTodo } from "../../redux/action-creators";

const TodoList: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useTypedSelector((state) => state.todos.todos);

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id))
  }

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id))
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <p
              style={{
                textDecoration: todo.done ? 'line-through' : 'none'
              }}
              onClick={(e) => handleToggle(todo.id)}
            >{todo.content}</p>
            <button onClick={(e) => handleDelete(todo.id)}>delete</button>
          </li>
        )
      })}
    </ul>
  )
};

export default TodoList;