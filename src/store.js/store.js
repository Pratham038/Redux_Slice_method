// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import todoReducer from "../features/todos/todoSlice";

export const store = configureStore({
  // reducer: rootReducer,

  reducer: { product: productReducer, todo: todoReducer },
});
