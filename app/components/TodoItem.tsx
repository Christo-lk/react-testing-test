"use client";

interface TodoItemProps {
  text: string;
  done: boolean;
  onToggle: () => void;
}

export default function TodoItem({ text, done, onToggle }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2">
      <span
        className={`text-gray-800 ${done ? "line-through text-gray-500" : ""}`}
      >
        {text}
      </span>
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
    </div>
  );
}
