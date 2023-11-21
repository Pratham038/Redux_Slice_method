import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
const AddTo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: input }));
    setInput("");
  };

  return (
    <div className="add-todo-container">
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Add a new todo..."
        />
        <button type="submit" className="add-todo-button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTo;
