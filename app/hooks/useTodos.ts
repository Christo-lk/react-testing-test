"use client";

import { useState } from "react";
import todoHelper from "./todoHelper";

export interface ITodo {
  id: string;
  text: string;
  done: boolean;
}

interface IProps {
  initialTodos?: ITodo[];
}

interface IHandlers {
  addTodo: () => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  handleChange: (text: string) => void;
  clearTodos: () => void;
  selectTodo: (id: string) => void;
  removeDuplicateTodos: () => void;
}

interface IData {
  todos: ITodo[];
  newTodo: string;
  isSelected: (id: string) => boolean;
  isTodoListLengthEven: boolean;
  todoListContainsDuplicates: boolean;
}

interface IUseTodos {
  handlers: IHandlers;
  data: IData;
}

export function useTodos({ initialTodos = [] }: IProps): IUseTodos {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const [selectedTodos, setSelectedTodos] = useState<string[]>([]);

  const isTodoListLengthEven = todos.length % 2 === 0 && todos.length > 0;
  const todoListContainsDuplicates = todoHelper.hasDuplicateTodos(todos);

  const addTodo = () => {
    if (!newTodo.length) return;

    setTodos([
      ...todos,
      {
        id: todoHelper.generateId(),
        text: newTodo.trim(),
        done: false,
      },
    ]);

    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setSelectedTodos(selectedTodos.filter((itemId) => itemId !== id));
  };

  const handleChange = (text: string) => {
    setNewTodo(text);
  };

  const selectTodo = (id: string) => {
    setSelectedTodos((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const isSelected = (id: string) => {
    return selectedTodos.includes(id);
  };

  const clearTodos = () => {
    setTodos([]);
    setSelectedTodos([]);
  };

  const removeDuplicateTodos = () => {
    const updatedTodos = todoHelper.removeDuplicateTodos(todos);

    setTodos(updatedTodos);
  };

  const data: IData = {
    todos,
    newTodo,
    isSelected,
    isTodoListLengthEven,
    todoListContainsDuplicates,
  };

  const handlers: IHandlers = {
    addTodo,
    toggleTodo,
    deleteTodo,
    handleChange,
    selectTodo,
    clearTodos,
    removeDuplicateTodos,
  };

  return {
    data,
    handlers,
  };
}
