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
    axios.get(BASE_URL) 
    .then(function (response){
      setTodos(response.data);
    })
  }, []);

  async function onCreateTodo(text) {
    const newTodo = {
      id: Math.random(),
      content: text,
      completed: false,
    };
    axios.post(BASE_URL, newTodo)
      .then(function (response){ 
        setTodos([...todos, response.data]);
      })
  }

  async function onDeleteTodo(id) {
     await axios.delete(BASE_URL+ "/" + id);
     setTodos(todos.filter(todo => todo.id !== id));
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

      <TodoForm onCreate={onCreateTodo} />

      <TodoFilter isChecked={filter} onToggle={onToggleFilter} />

      <ul className="todo-list">
        {todos.map(todo => (
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
