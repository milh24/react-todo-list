import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import TodoCard from "components/TodoCard";
import TopBar from "components/TopBar";
import TodoContext from "contexts/todoContext";
import { Field, Form, Formik } from "formik";
import { InputBase } from "formik-material-ui";
import React, { FC, useContext, useState } from "react";

const TodoScreen: FC = () => {
  const { list, addItem } = useContext(TodoContext);
  const classes = useStyles();
  const [status, setStatus] = useState("ALL");

  return (
    <Box className={classes.root}>
      <TopBar
        title="Todo List"
        extra={
          <Formik
            initialValues={{
              title: "",
            }}
            onSubmit={(values, { resetForm }) => {
              if (values.title) {
                addItem({
                  id: Date.now(),
                  userId: 1,
                  completed: false,
                  title: values.title,
                });
                resetForm();
              }
            }}
          >
            <Form>
              <Field
                className={classes.input}
                component={InputBase}
                name="title"
                placeholder="Add todo item"
              />
            </Form>
          </Formik>
        }
      />
      <Container className={classes.body} maxWidth="md">
        <Box>
          <List>
            {list
              .filter((e) => {
                if (status === "ALL") return true;
                if (status === "ACTIVE") return !e.completed;
                if (status === "COMPLETED") return e.completed;
                return true;
              })
              .map((e, i) => (
                <TodoCard key={e.id} todo={e} />
              ))}
          </List>
        </Box>
      </Container>
      <AppBar className={classes.bottomBar} position="fixed" elevation={0}>
        <Toolbar>
          <Container maxWidth="md">
            <Grid container justifyContent="space-between" alignItems="center">
              <Typography>
                {list.filter((e) => !e.completed).length} item(s) left
              </Typography>
              <ToggleButtonGroup
                value={status}
                exclusive
                onChange={(e, value) => setStatus(value)}
              >
                <ToggleButton value="ALL" aria-label="left aligned">
                  All
                </ToggleButton>
                <ToggleButton value="ACTIVE" aria-label="centered">
                  Active
                </ToggleButton>
                <ToggleButton value="COMPLETED" aria-label="right aligned">
                  Completed
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TodoScreen;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  input: {
    backgroundColor: "rgba(255,255,255,100)",
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
    borderRadius: 12,
  },
  body: {
    paddingBottom: 60,
  },
  bottomBar: {
    backgroundColor: "white",
    borderTop: `1px solid ${theme.palette.divider}`,
    top: "auto",
    bottom: 0,
    color: "black",
  },
}));
