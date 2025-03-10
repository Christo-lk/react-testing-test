"use client";

import HookTest from "./components/HookTest";
// import TodoList from "./components/TodoList";

// const groceries = [
//   { id: "1", text: "Apples", done: false },
//   { id: "2", text: "Bananas", done: false },
//   { id: "3", text: "Oranges", done: false },
// ];

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Todo List</h1>
      <div className="flex gap-4 max-w-4xl mx-auto">
        <HookTest />
        {/* <TodoList /> */}
        {/* <TodoList initialTodos={groceries} /> */}
      </div>
    </main>
  );
}
