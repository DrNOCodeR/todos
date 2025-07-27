import React, { useState, KeyboardEvent, ChangeEvent } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    const trimmed = text.trim();
    if (trimmed) {
      onAdd(trimmed);
      setText("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="What needs to be done?"
      />
    </div>
  );
};

export default TodoInput;
