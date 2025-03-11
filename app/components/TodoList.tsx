"use client";

import TodoItem from "./TodoItem";
import { ITodo, useTodos } from "../hooks/useTodos";
import Button from "./Button";
import Input from "./Input";

interface IProps {
  initialTodos?: ITodo[];
}

export default function TodoList({ initialTodos = [] }: IProps) {
  const { data, handlers } = useTodos({ initialTodos });

  return (
    <div className="w-lg">
      <div className="flex gap-2 mb-6">
        <Input
          value={data.newTodo}
          onChange={handlers.handleChange}
          placeholder="Add a new todo..."
        />
        <Button onClick={handlers.addTodo}>Add</Button>
      </div>

      <div className="space-y-2">
        {data.todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            item={todo}
            index={index}
            isSelected={data.isSelected(todo.id)}
            onToggle={() => handlers.toggleTodo(todo.id)}
            onDelete={() => handlers.deleteTodo(todo.id)}
            onSelect={() => handlers.selectTodo(todo.id)}
          />
        ))}
      </div>

      {data.todoListContainsDuplicates && (
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
    </div>
  );
}
