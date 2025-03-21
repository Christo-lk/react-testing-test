import todoHelper from "../todoHelper";
import { ITodo } from "../useTodos";

const todosWithDuplicates: ITodo[] = [
  { id: "1", text: "Todo 1", done: false },
  { id: "2", text: "Todo 1", done: false },
  { id: "3", text: "Todo 2", done: false },
  { id: "4", text: "Todo 2", done: false },
];

describe("todoHelper", () => {
  describe("generateId", () => {
    it("should generate a unique string", () => {
      const id = todoHelper.generateId();
      expect(typeof id).toBe("string");
      expect(id.length).toBeGreaterThan(0);
    });

    it("should generate different IDs on subsequent calls", () => {
      const id1 = todoHelper.generateId();
      const id2 = todoHelper.generateId();
      expect(id1).not.toBe(id2);
    });

    it("should generate IDs containing both random and timestamp components", () => {
      const id = todoHelper.generateId();
      // The ID should contain both the random string and timestamp
      expect(id).toMatch(/^[a-z0-9]+[a-z0-9]+$/);
    });
  });

  describe("removeDuplicateTodos", () => {
    it("should remove todos with duplicate text", () => {
      const result = todoHelper.removeDuplicateTodos(todosWithDuplicates);

      expect(result).toHaveLength(2);
      expect(result).toEqual([
        { id: "1", text: "Todo 1", done: false },
        { id: "3", text: "Todo 2", done: false },
      ]);
    });

    it("should handle an empty array", () => {
      const result = todoHelper.removeDuplicateTodos([]);
      expect(result).toEqual([]);
    });

    it("should handle an array with no duplicates", () => {
      const noDuplicates: ITodo[] = [
        { id: "1", text: "Todo 1", done: false },
        { id: "2", text: "Todo 2", done: false },
        { id: "3", text: "Todo 3", done: false },
      ];

      const result = todoHelper.removeDuplicateTodos(noDuplicates);
      expect(result).toEqual(noDuplicates);
    });
  });

  describe("hasDuplicateTodos", () => {
    it("should return true when there are duplicate todos", () => {
      expect(todoHelper.hasDuplicateTodos(todosWithDuplicates)).toBe(true);
    });

    it("should return false when there are no duplicate todos", () => {
      const noDuplicates: ITodo[] = [
        { id: "1", text: "Todo 1", done: false },
        { id: "2", text: "Todo 2", done: false },
        { id: "3", text: "Todo 3", done: false },
      ];
      expect(todoHelper.hasDuplicateTodos(noDuplicates)).toBe(false);
    });

    it("should return false for an empty array", () => {
      expect(todoHelper.hasDuplicateTodos([])).toBe(false);
    });

    it("should return true for multiple duplicates", () => {
      const multipleDuplicates: ITodo[] = [
        { id: "1", text: "Todo 1", done: false },
        { id: "2", text: "Todo 1", done: false },
        { id: "3", text: "Todo 2", done: false },
        { id: "4", text: "Todo 2", done: false },
      ];
      expect(todoHelper.hasDuplicateTodos(multipleDuplicates)).toBe(true);
    });
  });
});
