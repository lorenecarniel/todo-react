import { Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

export function TodoForm({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('');

  return (
    <Flex
      as="form"
      gap="3"
      className="todo-form"
      onSubmit={async e => {
        e.preventDefault();
        if (newTodo.trim() === '') return;
        await onCreateTodo(newTodo);
        setNewTodo('');
      }}
    >
      <Input
        value={newTodo}
        placeholder="Adicionar nova tarefa"
        onChange={event => setNewTodo(event.target.value)}
      />
      <Button type="submit" colorScheme="blue">
        Adicionar
      </Button>
    </Flex>
  );
}
