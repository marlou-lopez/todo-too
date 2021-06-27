import { useDispatch } from "react-redux";
import { Todo } from "../../types";
import { deleteTodo, toggleTodo } from "../../redux/action-creators";
import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from "react";
import { useState } from "react";
import clsx from "clsx";

const useStyle = makeStyles((theme: Theme) => {
  return createStyles({
    paper: {
      display: 'flex'
    },
    content: {
      padding: theme.spacing(2.5)
    },
    action: {
      display: 'flex',
    },
    moreMenu: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 0,
      visibility: 'hidden',
      borderTopRightRadius: theme.spacing(0.5),
      borderBottomRightRadius: theme.spacing(0.5),
      transition: 'visibility .3s, width .3s linear',
      '&.expanded': {
        width: theme.spacing(18.75),
        visibility: 'visible',
      }
    }
  })
})

const TodoItem: React.FC<Todo> = ({ id, content, done }) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState(false);

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id))
  }

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id))
  }

  return (
    <Paper key={id} className={classes.paper} >
      <Grid
        container
        wrap='nowrap'
        justify='space-between'
        alignItems='center'
        className={classes.content}
      >
        <Grid item>
          <Typography
            style={{
              textDecoration: done ? 'line-through' : 'none'
            }}
            noWrap

          >{content}</Typography>
        </Grid>
        <Grid item className={classes.action}>
          {
            done ?
              <CheckCircleIcon color='primary' onClick={(e) => handleToggle(id)} />
              : <RadioButtonUncheckedIcon color='primary' onClick={(e) => handleToggle(id)} />
          }
          {!openMenu ? <MoreVertIcon color='primary' onClick={(e) => setOpenMenu(true)} /> : null}
          {/* <button onClick={(e) => handleDelete(id)}>delete</button> */}
        </Grid>
      </Grid>
      <Grid className={clsx(classes.moreMenu, {'expanded': openMenu})}>
        <EditIcon />
        <DeleteIcon  onClick={(e) => handleDelete(id)} />
        <CloseIcon onClick={(e) => setOpenMenu(false)}/>
      </Grid>
    </Paper>
  )
};

export default TodoItem;