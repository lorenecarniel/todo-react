import { useState } from 'react';

export function TodoForm({ onCreate }) {
  const [text, setText] = useState('');

  async function onSubmit() {
    // TODO: call onCreate with newTodo and reset newTodo
  }

  function onTextChange(event) {
    // TODO: update the text state
  }

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input id="todo-text" type="text" value={text} onChange={onTextChange} />
      <button type="submit">Adicionar</button>
    </form>
  );
}
