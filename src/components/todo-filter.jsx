import { Checkbox } from '@chakra-ui/react';

export function TodoFilter({ isChecked, onToggle }) {
  return (
    <Checkbox isChecked={isChecked} onChange={onToggle}>
      Ocultar tarefas feitas
    </Checkbox>
  );
}
