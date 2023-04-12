import { useTodosContext } from 'context/todoContext';
import TodoItem from './todoItem.component';

const TodosList = () => {
  const { todos } = useTodosContext();
  return (
    <ul>
      {
        todos.map((todo) => (<TodoItem key={todo.id} todo={todo} />))
      }
    </ul>
  );
};

export default TodosList;
