import { useState } from 'react';

export function TodoForm({ onCreate }) {
  const [text, setText] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    onCreate(text);
    setText("");
  }

  function onTextChange(event) {
    setText(event.target.value);
  }

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input id="todo-text" type="text" value={text} onChange={onTextChange} />
      <button type="submit">Adicionar</button>
    </form>
  );
}
