// GetTodo.js
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";
const GetTodo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="get-todo-container">
      <h2>All Todos</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetTodo;
