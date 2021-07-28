import { ThemeProvider } from "@material-ui/core";
import TodoContext from "contexts/todoContext";
import { useTodo } from "hooks/todo";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoScreen from "screens/Todo";
import { lightTheme } from "theme/theme";

function App() {
  const { list, addItem, removeItem, setItemCompleted } = useTodo();
  return (
    <ThemeProvider theme={lightTheme}>
      <TodoContext.Provider
        value={{
          list: list,
          addItem: addItem,
          removeItem: removeItem,
          setItemCompleted: setItemCompleted,
        }}
      >
        <Router>
          <Switch>
            <Route path="/">
              <TodoScreen />
            </Route>
          </Switch>
        </Router>
      </TodoContext.Provider>
    </ThemeProvider>
  );
}

export default App;
