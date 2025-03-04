"use client";

interface TodoItemProps {
  text: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({
  text,
  done,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2">
      <span
        className={`text-gray-800 ${done ? "line-through text-gray-500" : ""}`}
      >
        {text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={onToggle}
          className={`px-3 py-1 text-sm rounded ${
            done
              ? "text-green-600 hover:text-green-800 hover:bg-green-50"
              : "text-blue-600 hover:text-blue-800 hover:bg-blue-50"
          }`}
        >
          {done ? "Undo" : "Done"}
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
