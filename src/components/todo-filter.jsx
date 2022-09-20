import { Checkbox } from '@chakra-ui/react';

export function TodoFilter({ filter, onToggle }) {
  return (
    <Checkbox checked={filter} onChange={onToggle} pl="3">
      Ocultar tarefas feitas
    </Checkbox>
  );
}
