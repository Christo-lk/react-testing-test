"use client";

import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

export default function TodoList() {
  const { data, handlers, state } = useTodos({});

  return (
    <div className="max-w-md mx-auto">
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={data.newTodo}
          onChange={(e) => handlers.handleChange(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handlers.handleAddTodo()}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlers.handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {data.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            item={todo}
            isSelected={state.isSelected(todo.id)}
            onToggle={() => handlers.handleToggleTodo(todo.id)}
            onDelete={() => handlers.handleDeleteTodo(todo.id)}
            onSelect={() => handlers.handleToggleSelect(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}
