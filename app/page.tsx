"use client";

import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Todo List</h1>
      <div className="flex gap-4 max-w-4xl mx-auto">
        <TodoList />
      </div>
    </main>
  );
}
