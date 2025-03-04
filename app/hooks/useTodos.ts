"use client";

import { useState } from "react";
import {
  generateId,
  hasDuplicateTodos,
  removeDuplicateTodos,
  removeEvenTodos,
} from "./todoHelper";

export interface ITodo {
  id: string;
  text: string;
  done: boolean;
}

interface IProps {
  initialTodos?: ITodo[];
}

interface IHandlers {
  handleAddTodo: () => void;
  handleToggleTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleChange: (text: string) => void;
  clearTodos: () => void;
  handleToggleSelect: (id: string) => void;
  removeEvenTodos: () => void;
  removeDuplicateTodos: () => void;
}

interface IData {
  todos: ITodo[];
  newTodo: string;
}

interface IState {
  isSelected: (id: string) => boolean;
  isTodoListLengthEven: boolean;
  todoListContainesDuplicates: boolean;
}

interface IUseTodos {
  data: IData;
  handlers: IHandlers;
  state: IState;
}

export function useTodos({ initialTodos = [] }: IProps): IUseTodos {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const isTodoListLengthEven = todos.length % 2 === 0 && todos.length > 0;
  const todoListContainesDuplicates = hasDuplicateTodos(todos);

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

  const handleChange = (text: string) => {
    setNewTodo(text);
  };

  const handleToggleSelect = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const isSelected = (id: string) => {
    return selectedItems.includes(id);
  };

  const clearTodos = () => {
    setTodos([]);
    setSelectedItems([]);
  };

  const handleRemoveEvenTodos = () => {
    const updatedTodos = removeEvenTodos(todos);
    setTodos(updatedTodos);
  };

  const handleRemoveDuplicateTodos = () => {
    const updatedTodos = removeDuplicateTodos(todos);
    setTodos(updatedTodos);
  };

  const data: IData = {
    todos,
    newTodo,
  };

  const state: IState = {
    isSelected,
    isTodoListLengthEven,
    todoListContainesDuplicates,
  };

  const handlers: IHandlers = {
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleChange,
    handleToggleSelect,
    clearTodos,
    removeEvenTodos: handleRemoveEvenTodos,
    removeDuplicateTodos: handleRemoveDuplicateTodos,
  };

  return {
    data,
    handlers,
    state,
  };
}
