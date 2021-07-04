import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { deleteTodo, toggleTodo } from "../../redux/action-creators";
import TodoItem from "./TodoItem";

const useStyle = makeStyles((theme: Theme) => {
  return createStyles({
    list: {
      '& > div:not(:first-child)': {
        marginTop: theme.spacing(1)
      }
    }
  })
})

const TodoList: React.FC = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const todos = useTypedSelector((state) => state.todos);

  return (
    <Grid className={classes.list}>
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            handleDelete={() => {
              dispatch(deleteTodo(todo.id))
            }}
            handleToggle={() => {
              dispatch(toggleTodo(todo.id))
            }}
          />
        )
      })}
    </Grid>
  )
};

export default TodoList;