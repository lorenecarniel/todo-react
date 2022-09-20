export function TodoFilter() {
  return (
    <div className="todo-filter">
      <input id="filter-todo" type="checkbox" onChange={() => {}} />
      <label htmlFor="filter-todo">Ocultar tarefas feitas</label>
    </div>
  );
}
