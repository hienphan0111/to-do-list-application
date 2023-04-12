import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

import { v4 as uuidv4 } from 'uuid';

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
  const todosInit = JSON.parse(localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(todosInit.map((todo) => ({
    ...todo, id: uuidv4(),
  })));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const deleTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const updateTodo = (task, id) => {
    const updateTodo = [];
    todos.forEach((todo) => {
      if (todo.id === id) {
        const temp = todo;
        temp.title = task;
        updateTodo.push(temp);
      } else {
        updateTodo.push(todo);
      }
    });
    setTodos(updateTodo);
  };

  const addTodoItem = (task) => {
    const newTodo = {
      id: uuidv4(),
      title: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        handleChange,
        deleTodo,
        addTodoItem,
        updateTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);
