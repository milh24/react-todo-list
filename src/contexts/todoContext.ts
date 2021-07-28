import { Todo } from "models/todo";
import React from "react";

type TodoContextType = {
  list: Todo[];
  addItem: (todo: Todo) => void;
  removeItem: (todo: Todo) => void;
  setItemCompleted: (todo: Todo, completed: boolean) => void;
};

const TodoContext = React.createContext<TodoContextType>({
  list: [],
  addItem: () => {},
  removeItem: () => {},
  setItemCompleted: () => {},
});

export default TodoContext;
