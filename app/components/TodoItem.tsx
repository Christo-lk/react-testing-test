"use client";

import { ITodo } from "../hooks/useTodos";

interface IProps {
  item: ITodo;
  index: number;
  isSelected: (id: string) => boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
}

export default function TodoItem({
  index,
  item,
  onToggle,
  onDelete,
  onSelect,
  isSelected,
}: IProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isSelected(item.id)}
          onChange={() => onSelect(item.id)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
        <span
          className={`text-gray-800 ${
            item.done ? "line-through text-gray-500" : ""
          }`}
        >
          {index + 1}. {item.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(item.id)}
          className={`px-3 py-1 text-sm rounded ${
            item.done
              ? "text-green-600 hover:text-green-800 hover:bg-green-50"
              : "text-blue-600 hover:text-blue-800 hover:bg-blue-50"
          }`}
        >
          {item.done ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
