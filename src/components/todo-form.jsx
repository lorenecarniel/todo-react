import { useState } from 'react';

export function TodoForm({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('');

  return (
    <form
      className="todo-form"
      onSubmit={async e => {
        e.preventDefault();
        if (newTodo.trim() === '') return;
        await onCreateTodo(newTodo);
        setNewTodo('');
      }}
    >
      <input
        id="todo-text"
        type="text"
        value={newTodo}
        onChange={event => setNewTodo(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
