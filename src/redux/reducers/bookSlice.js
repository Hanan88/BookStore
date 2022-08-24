import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk("books/get", async ({page, pageSize},thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await axios.get("http://gutendex.com/books");
    console.log(res, "res");
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  books: [], 
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const booksSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
