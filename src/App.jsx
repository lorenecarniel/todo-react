import { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from './components/todo';
import { TodoForm } from './components/todo-form';
import { TodoFilter } from './components/todo-filter';
import { Container, Heading, List, Text } from '@chakra-ui/react';

export function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(false);

  const filteredTodos = filter ? todos.filter(todo => !todo.completed) : todos;

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

  async function onToggleTodo(id, value) {
    const response = await axios.patch(`http://localhost:3333/todos/${id}`, {
      completed: value,
    });

    setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
  }

  return (
    <Container className="container" display="flex" flexDir="column" gap="4">
      <Heading>Nosso app To Do</Heading>

      <TodoForm onCreateTodo={onCreateTodo} />

      <TodoFilter filter={filter} onToggle={() => setFilter(!filter)} />

      <List className="todo-list" spacing="3">
        {filteredTodos.length > 0 ? (
          filteredTodos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
            />
          ))
        ) : (
          <Text>Nenhuma tarefa encontrada</Text>
        )}
      </List>
    </Container>
  );
}
