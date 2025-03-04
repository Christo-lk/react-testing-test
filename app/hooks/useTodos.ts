"use client";

import { useState } from "react";

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: generateId(),
          text: newTodo.trim(),
          done: false,
        },
      ]);

      setNewTodo("");
    }
  };

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleToggleSelect = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const isSelected = (id: string) => {
    return selectedItems.includes(id);
  };

  const handleClearSelection = () => {
    setSelectedItems([]);
  };

  const data = {
    todos,
    newTodo,
  };

  const handlers = {
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleChange,
    handleToggleSelect,
    isSelected,
    handleClearSelection,
  };

  return {
    data,
    handlers,
  };
}
