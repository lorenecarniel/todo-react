export function Todo({ todo, onDelete, onToggle }) {
  function onDeleteClick() {
    onDelete(todo.id);
  }

  function onToggleClick() {
    onToggle(todo.id, !todo.completed);
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
