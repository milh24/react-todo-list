import { StorageKey } from "constants/storageKey";
import { Todo } from "models/todo";
import { useEffect, useState } from "react";
import threadService from "services/todoService";

export const useTodo = () => {
  const [list, setList] = useState<Todo[]>([]);

  useEffect(() => {
    if (localStorage.getItem(StorageKey.FIRST_LOADED) === "true") {
      setList(JSON.parse(localStorage.getItem(StorageKey.TODO_LIST) ?? "[]"));
    } else {
      threadService.getAll().then((e) => {
        setList(e.slice(0, 10));
        localStorage.setItem(StorageKey.FIRST_LOADED, "true");
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(StorageKey.TODO_LIST, JSON.stringify(list));
  }, [list]);

  const addItem = (todo: Todo) => {
    setList([...list, todo]);
  };

  const removeItem = (todo: Todo) => {
    setList(list.filter((e) => e.id !== todo.id));
  };

  const setItemCompleted = (todo: Todo, completed: boolean) => {
    setList(
      list.map((e) => {
        if (e.id === todo.id) {
          return {
            ...todo,
            completed: completed,
          };
        }
        return e;
      })
    );
  };

  return {
    list,
    addItem,
    removeItem,
    setItemCompleted,
  } as const;
};
