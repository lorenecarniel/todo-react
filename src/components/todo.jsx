import {
  Checkbox,
  Flex,
  IconButton,
  Input,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export function Todo({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(todo.content);

  function onDeleteClick() {
    onDelete(todo.id);
  }

  function onToggleClick() {
    onToggle(todo.id, !todo.completed);
  }

  function onEditClick() {
    setIsEditing(!isEditing);

    if (isEditing) {
      onEdit(todo.id, newContent);
    }
  }

  function onContentChange(event) {
    setNewContent(event.target.value);
  }

  return (
    <ListItem p="2" display="flex" shadow="base" rounded="md">
      <Flex flexGrow="1" alignItems="center" gap="2">
        {isEditing ? (
          <Input value={newContent} onChange={onContentChange} />
        ) : (
          <Checkbox isChecked={todo.completed} onChange={onToggleClick}>
            <Text
              as={todo.completed && 'del'}
              color={todo.completed && 'gray.400'}
            >
              {todo.content}
            </Text>
          </Checkbox>
        )}
        <Text color={'gray.400'} fontSize="xs">
          {todo.createdAt.slice(0, 10).replace(/-/g, '/')}
        </Text>
      </Flex>
      <IconButton
        size="sm"
        variant="ghost"
        colorScheme={'green'}
        icon={!isEditing ? <EditIcon /> : <CheckIcon />}
        onClick={onEditClick}
        aria-label={!isEditing ? 'Edit todo' : 'Save todo'}
      />
      <IconButton
        size="sm"
        variant="ghost"
        colorScheme={'red'}
        icon={<DeleteIcon />}
        onClick={onDeleteClick}
        aria-label="Delete todo"
      />
    </ListItem>
  );
}
