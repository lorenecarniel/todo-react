import { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from './components/todo';
import { TodoForm } from './components/todo-form';
import { TodoFilter } from './components/todo-filter';

export function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  async function onCreateTodo(newTodo) {
    const response = await axios.post('http://localhost:3333/todos', {
      id: Math.random(),
      title: newTodo,
      completed: false,
    });

    setTodos([...todos, response.data]);
  }

  async function onDeleteTodo(id) {
    await axios.delete(`http://localhost:3333/todos/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // TODO: async function onToggleTodoCompleted(id) {}

  return (
    <div className="container">
      <h1>Nosso app To Do</h1>

      <TodoForm onCreateTodo={onCreateTodo} />

      <TodoFilter />

      <ul className="todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </ul>
    </div>
  );
}
