import { DeleteIcon } from '@chakra-ui/icons';
import { Checkbox, IconButton, ListItem, Text } from '@chakra-ui/react';

export function Todo({ todo, onDeleteTodo, onToggleTodo }) {
  return (
    <ListItem display="flex" rounded="md" shadow="base" padding="3">
      <Checkbox
        flex="1"
        id={todo.id}
        isChecked={todo.completed}
        onChange={() => onToggleTodo(todo.id, !todo.completed)}
      >
        <Text as={todo.completed && 'del'} color={todo.completed && 'gray.300'}>
          {todo.title}
        </Text>
      </Checkbox>
      <IconButton
        size="sm"
        variant="ghost"
        colorScheme="red"
        aria-label="Delete todo"
        icon={<DeleteIcon />}
        onClick={() => onDeleteTodo(todo.id)}
      />
    </ListItem>
  );
}
