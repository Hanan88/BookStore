import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../reducers/bookSlice";

export const store = configureStore({
  reducer: {
      books: bookReducer,
  },
});
