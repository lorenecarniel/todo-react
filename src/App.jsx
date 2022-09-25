import { useEffect, useState } from 'react';
import axios from 'axios';
import { Todo } from './components/todo';
import { TodoForm } from './components/todo-form';
import { TodoFilter } from './components/todo-filter';
import { Heading, List, Stack, Text } from '@chakra-ui/react';

const BASE_URL = 'http://localhost:3333/todos';

export function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(false);

  const filteredTodos = filter ? todos.filter(todo => !todo.completed) : todos;

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
      createdAt: new Date(),
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
    await axios.patch(BASE_URL + '/' + id, { completed: value });
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: value } : todo,
      ),
    );
  }

  async function onEditTodo(id, newContent) {
    await axios.patch(BASE_URL + '/' + id, { content: newContent });
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, content: newContent } : todo,
      ),
    );
  }

  return (
    <Stack spacing={5} maxW="400px" mx="auto" p="4">
      <Heading>Nosso app To Do</Heading>

      <TodoForm onCreate={onCreateTodo} />

      <TodoFilter isChecked={filter} onToggle={() => setFilter(!filter)} />

      {todos.length > 0 ? (
        <List spacing="3">
          {filteredTodos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={onDeleteTodo}
              onToggle={onToggleTodo}
              onEdit={onEditTodo}
            />
          ))}
        </List>
      ) : (
        <Text>Sem tarefas criadas...</Text>
      )}
    </Stack>
  );
}
