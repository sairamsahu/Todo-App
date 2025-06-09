function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-2"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.todo}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
