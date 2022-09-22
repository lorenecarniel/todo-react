export function TodoFilter({ isChecked, onToggle }) {
  return (
    <div className="todo-filter">
      <input
        id="filter-todo"
        type="checkbox"
        checked={isChecked}
        onChange={onToggle}
      />
      <label htmlFor="filter-todo">Ocultar tarefas feitas</label>
    </div>
  );
}
