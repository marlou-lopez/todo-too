import { createStyles, Dialog, Grid, makeStyles, Theme } from "@material-ui/core";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Todo } from "../../types";
import TodoForm from "./TodoForm";

interface TodoModalProps {
  selectedTodo: Todo,
  handleCloseModal: () => void;
  open: boolean;
}

const useStyle = makeStyles((theme: Theme) => {
  return createStyles({
    modalPaper: {
      height: theme.spacing(100),
      padding: theme.spacing(2)
    }
  })
})

const TodoModal: React.FC<TodoModalProps> = ({selectedTodo, handleCloseModal, open}) => {
  const classes = useStyle();
  console.log('todo: ', selectedTodo)
  return (
    <Dialog
      open={open}
      onClose={handleCloseModal}
      fullWidth
      classes={{
        paper: classes.modalPaper
      }}
    >
      <TodoForm defaultContent={selectedTodo.content} />
    </Dialog>
  )
};

export default TodoModal;