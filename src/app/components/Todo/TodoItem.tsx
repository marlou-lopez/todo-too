import React, { useState } from 'react';
import {
  createStyles, Grid, makeStyles, Paper, Theme, Typography,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import clsx from 'clsx';
import { Todo } from '../../types';

interface TodoItemProps {
  todo: Todo;
  handleToggle: (id: string) => void;
  handleDelete: (id: string) => void;
  handleSelection: () => void;
}

const useStyle = makeStyles((theme: Theme) => createStyles({
  paper: {
    display: 'flex',
    cursor: 'pointer',
  },
  content: {
    '& .text': {
      width: '80%',
      padding: theme.spacing(2.5),
    },
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
      marginLeft: theme.spacing(1),
    },
  },
}));

const TodoItem: React.FC<TodoItemProps> = ({
  todo: { id, content, done }, handleDelete, handleSelection, handleToggle,
}) => {
  const classes = useStyle();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Paper key={id} className={classes.paper} elevation={2}>
      <Grid
        container
        wrap="nowrap"
        justify="space-between"
        alignItems="center"
        className={classes.content}
      >
        <Grid item className="text" onClick={handleSelection}>
          <Typography
            id={`content-${id}`}
            style={{
              textDecoration: done ? 'line-through' : 'none',
            }}
            noWrap
          >
            {content}
          </Typography>
        </Grid>
        <Grid item className={classes.action}>
          {
            done
              ? <CheckCircleIcon id={`checked-circle-${id}`} color="primary" onClick={() => handleToggle(id)} />
              : <RadioButtonUncheckedIcon id={`unchecked-circle-${id}`} color="primary" onClick={() => handleToggle(id)} />
          }
          {!openMenu ? <MoreVertIcon id={`vertical-menu-${id}`} color="primary" onClick={() => { setOpenMenu(true); }} /> : null}
        </Grid>
      </Grid>
      <Grid id={`more-menu-${id}`} className={clsx(classes.moreMenu, { expanded: openMenu })}>
        <EditIcon />
        <DeleteIcon id={`delete-icon-${id}`} onClick={() => handleDelete(id)} />
        <CloseIcon id={`close-icon-${id}`} onClick={() => setOpenMenu(false)} />
      </Grid>
    </Paper>
  );
};

export default TodoItem;
