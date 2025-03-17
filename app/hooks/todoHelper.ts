import { ITodo } from "./useTodos";

function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

const removeDuplicateTodos = (todos: ITodo[]): ITodo[] => {
  const seenTexts = new Set<string>();

  return todos.filter((todo) => {
    if (seenTexts.has(todo.text)) {
      return false;
    }
    seenTexts.add(todo.text);
    return true;
  });
};

const hasDuplicateTodos = (todos: ITodo[]): boolean => {
  const seenTexts = new Set(todos.map((todo) => todo.text));
  return seenTexts.size !== todos.length;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  generateId,
  removeDuplicateTodos,
  hasDuplicateTodos,
};
