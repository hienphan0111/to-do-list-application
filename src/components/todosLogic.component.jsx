import { TodosProvider } from 'context/todoContext';
import InputTodo from './inputTodo.component';
import TodosList from './todosList.component';

const TodosLogic = () => (
  <TodosProvider>
    <div className="todo-logic-container">
      <InputTodo />
      <TodosList />
    </div>
  </TodosProvider>
);

export default TodosLogic;
