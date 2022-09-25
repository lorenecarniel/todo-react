import { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from './components/todo';
import { TodoForm } from './components/todo-form';
import { TodoFilter } from './components/todo-filter';

const BASE_URL = 'http://localhost:3333/todos';

export function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    axios.get(BASE_URL).then(function (response) {
      setTodos(response.data);
    });
  }, []);

  async function onCreateTodo(text) {
    const newTodo = {
      id: Math.random(),
      content: text,
      completed: false,
    };
    axios.post(BASE_URL, newTodo).then(function (response) {
      setTodos([...todos, response.data]);
    });
  }

  async function onDeleteTodo(id) {
    await axios.delete(BASE_URL + '/' + id);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  async function onToggleTodo(id, value) {
    await axios.put(BASE_URL + '/' + id, { completed: value });
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: value } : todo,
      ),
    );
  }

  function onToggleFilter() {
    setFilter(!filter);
  }

  function filterTodos() {
    return filter ? todos.filter(todo => !todo.completed) : todos;
  }

  const filteredTodos = filterTodos();

  return (
    <div className="container">
      <h1>Nosso app To Do</h1>

      <TodoForm onCreate={onCreateTodo} />

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
