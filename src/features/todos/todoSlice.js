import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.text != "") {
        const todos = { id: nanoid(), text: action.payload.text };
        state.todos.push(todos);
      }
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((e) => {
        return e.id != action.payload;
      });
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      });
    },
  },
});

export const { updateTodo, removeTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;
