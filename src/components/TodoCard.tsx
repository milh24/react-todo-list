import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import TodoContext from "contexts/todoContext";
import { Todo } from "models/todo";
import { FC, useContext } from "react";

const TodoCard: FC<{ todo: Todo }> = (props) => {
  const { todo } = props;
  const classes = useStyles();
  const { removeItem, setItemCompleted } = useContext(TodoContext);

  return (
    <Grid
      className={classes.container}
      container
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <Checkbox
              checked={todo.completed}
              onChange={(e) => setItemCompleted(todo, !todo.completed)}
            />
          </Grid>
          <Grid item>
            <Typography
              color={todo.completed ? "textSecondary" : "textPrimary"}
            >
              {todo.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <IconButton onClick={() => removeItem(todo)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TodoCard;

const useStyles = makeStyles((theme) => ({
  container: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 16,
    padding: theme.spacing(2),
    margin: `${theme.spacing(2)}px 0px`,
  },
  checkbox: {
    border: "1px solid lightgrey",
  },
}));
