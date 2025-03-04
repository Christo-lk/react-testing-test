"use client";

import TodoItem from "./TodoItem";
import { ITodo, useTodos } from "../hooks/useTodos";
import Button from "./Button";

interface IProps {
  initialTodos?: ITodo[];
}

export default function TodoList({ initialTodos = [] }: IProps) {
  const { data, handlers, state } = useTodos({ initialTodos });

  return (
    <div className="w-lg">
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={data.newTodo}
          onChange={(e) => handlers.handleChange(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handlers.handleAddTodo()}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button onClick={handlers.handleAddTodo}>Add</Button>
      </div>

      <div className="space-y-2">
        {data.todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            item={todo}
            index={index}
            isSelected={state.isSelected(todo.id)}
            onToggle={() => handlers.handleToggleTodo(todo.id)}
            onDelete={() => handlers.handleDeleteTodo(todo.id)}
            onSelect={() => handlers.handleToggleSelect(todo.id)}
          />
        ))}
      </div>

      {state.todoListContainsDuplicates && (
        <div className="mt-4 text-red-500">
          Todo list contains duplicates!!!
          <Button
            type="error"
            onClick={handlers.removeDuplicateTodos}
            className="ml-2"
          >
            Remove duplicates
          </Button>
        </div>
      )}

      {/* <Button
        type="error"
        disabled={!state.isTodoListLengthEven}
        onClick={handlers.removeEvenTodos}
      >
        Remove even todos
      </Button> */}
    </div>
  );
}
