import { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from './components/todo';
import { TodoForm } from './components/todo-form';
import { TodoFilter } from './components/todo-filter';

const BASE_URL = 'http://localhost:3000/todos';

export function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    // TODO: fetch todos from the server
  }, []);

  async function onCreateTodo(text) {
    const newTodo = {
      id: Math.random(),
      content: text,
      completed: false,
    };
    // TODO: create a new todo and add it to the list
  }

  async function onDeleteTodo(id) {
    // TODO: delete the todo from the server and remove it from the list
  }

  async function onToggleTodo(id, value) {
    // TODO: toggle the completed property from the todo with the given id on the server and update it on the list
  }

  function onToggleFilter() {
    // TODO: toggle the filter value between true and false
  }

  function filterTodos() {
    // TODO: return the todos that are not completed if filter is true or all todos if filter is false
  }

  const filteredTodos = []; // TODO: call filterTodos

  return (
    <div className="container">
      <h1>Nosso app To Do</h1>

      <TodoForm onCreateTodo={onCreateTodo} />

      <TodoFilter isChecked={filter} onToggle={onToggleFilter} />

      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDeleteTodo}
            onToggle={onToggleTodo}
          />
        ))}
      </ul>
    </div>
  );
}
