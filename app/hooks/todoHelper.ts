import { ITodo } from "./useTodos";

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export const removeDuplicateTodos = (todos: ITodo[]): ITodo[] => {
  const seenTexts = new Set<string>();
  return todos.filter((todo) => {
    if (seenTexts.has(todo.text)) {
      return false;
    }
    seenTexts.add(todo.text);
    return true;
  });
};

export const removeEvenTodos = (todos: ITodo[]): ITodo[] => {
  const t = todos
    .map((t, i) => (i % 2 === 0 ? t : null))
    .filter((y) => y !== null);

  return t;
};

export const hasDuplicateTodos = (todos: ITodo[]): boolean => {
  const seenTexts: string[] = [];

  return todos.some((todo) => {
    if (seenTexts.includes(todo.text)) {
      return true;
    }
    seenTexts.push(todo.text);
    return false;
  });
};
