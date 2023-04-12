import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useTodosContext } from 'context/todoContext';

const InputTodo = () => {
  const [inputTask, setInputTask] = useState('');
  const [message, setMessage] = useState('');
  const { addTodoItem } = useTodosContext();

  const handleTaskInput = (e) => {
    setInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTask.trim()) {
      addTodoItem(inputTask);
    } else {
      setMessage('Please add Item');
    }
    setInputTask('');
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          value={inputTask}
          onChange={handleTaskInput}
          placeholder="Add todo..."
        />
        <button type="button" onClick={handleSubmit} className="input-submit">
          <FaPlusCircle />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </div>
  );
};

export default InputTodo;
