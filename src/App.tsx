import React, { useState } from "react";
import { Todo } from "./types";
import "./styles/main.scss";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <p className="title">todos</p>
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
      <TodoFooter
        activeCount={todos.filter((todo) => !todo.completed).length}
        currentFilter={filter}
        onFilterChange={setFilter}
        onClearCompleted={handleClearCompleted}
        hasCompleted={todos.some((todo) => todo.completed)}
      />
    </div>
  );
};

export default App;
