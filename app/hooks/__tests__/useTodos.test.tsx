import { renderHook, act } from "@testing-library/react";
import { useTodos } from "../useTodos";

describe("useTodos", () => {
  it("should initialize with empty todos and empty newTodo", () => {
    const { result } = renderHook(() => useTodos({ initialTodos: [] }));

    expect(result.current.data.todos).toEqual([]);
    expect(result.current.data.newTodo).toBe("");
  });

  it("should add a new todo when handleAddTodo is called", () => {
    const { result } = renderHook(() => useTodos({ initialTodos: [] }));

    act(() => {
      result.current.handlers.handleChange("New todo");
    });

    act(() => {
      result.current.handlers.handleAddTodo();
    });

    expect(result.current.data.todos).toHaveLength(1);
    expect(result.current.data.todos[0].text).toBe("New todo");
    expect(result.current.data.todos[0].done).toBe(false);
    expect(result.current.data.newTodo).toBe("");
  });

  it("should not add empty todos", () => {
    const { result } = renderHook(() => useTodos({ initialTodos: [] }));

    act(() => {
      result.current.handlers.handleAddTodo();
    });

    expect(result.current.data.todos).toHaveLength(0);
  });

  it("should toggle todo done status", () => {
    const { result } = renderHook(() => useTodos({ initialTodos: [] }));

    // Add a todo
    act(() => {
      result.current.handlers.handleChange("Test todo");
    });

    act(() => {
      result.current.handlers.handleAddTodo();
    });

    const todoId = result.current.data.todos[0].id;

    // Toggle the todo
    act(() => {
      result.current.handlers.handleToggleTodo(todoId);
    });

    expect(result.current.data.todos[0].done).toBe(true);

    // Toggle it back
    act(() => {
      result.current.handlers.handleToggleTodo(todoId);
    });

    expect(result.current.data.todos[0].done).toBe(false);
  });

  it("should delete a todo", () => {
    const { result } = renderHook(() => useTodos({ initialTodos: [] }));

    // Add a todo
    act(() => {
      result.current.handlers.handleChange("Test todo");
    });

    act(() => {
      result.current.handlers.handleAddTodo();
    });

    expect(result.current.data.todos).toHaveLength(1);

    const todoId = result.current.data.todos[0].id;

    // Delete the todo
    act(() => {
      result.current.handlers.handleDeleteTodo(todoId);
    });

    expect(result.current.data.todos).toHaveLength(0);
  });

  it("should update newTodo value when handleChange is called", () => {
    const { result } = renderHook(() => useTodos({ initialTodos: [] }));

    act(() => {
      result.current.handlers.handleChange("test");
    });

    expect(result.current.data.newTodo).toBe("test");
  });
});
