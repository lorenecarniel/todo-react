import { Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

export function TodoForm({ onCreate }) {
  const [text, setText] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    onCreate(text);
    setText('');
  }

  function onTextChange(event) {
    setText(event.target.value);
  }

  return (
    <Flex as="form" gap="3" onSubmit={onSubmit}>
      <Input
        type="text"
        value={text}
        onChange={onTextChange}
        placeholder="Crie sua tarefa"
      />
      <Button type="submit" colorScheme="blue">
        Adicionar
      </Button>
    </Flex>
  );
}
