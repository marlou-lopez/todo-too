import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import TodoItem from "./TodoItem";

const useStyle = makeStyles((theme: Theme) => {
  return createStyles({
    list: {
      '& div:not(:first-child)': {
        marginTop: theme.spacing(1)
      }
    }
  })
})

const TodoList: React.FC = () => {
  const classes = useStyle();
  const todos = useTypedSelector((state) => state.todos.todos);

  return (
    <Grid className={classes.list}>
      {todos.map((todo) => {
        return (
          <TodoItem {...todo} />
        )
      })}
    </Grid>
  )
};

export default TodoList;