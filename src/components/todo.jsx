function Todo({ todo, onDeleteTodo }) {
  return (
    <li>
      <input id={todo.id} type="checkbox" checked={todo.completed} />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button
        type="button"
        style={{ color: 'red' }}
        onClick={() => onDeleteTodo(todo.id)}
      >
        X
      </button>
    </li>
  );
}

export default Todo;
