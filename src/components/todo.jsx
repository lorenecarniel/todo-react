export function Todo({ todo, onDelete, onToggle }) {
  function onDeleteClick() {
    // TODO: call onDelete with todo.id
  }

  function onToggleClick() {
    // TODO: call onToggle with todo.id and todo.completed new value
  }

  return (
    <li>
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleClick}
      />
      <label htmlFor={todo.id}>{todo.content}</label>
      <button type="button" onClick={onDeleteClick}>
        X
      </button>
    </li>
  );
}
