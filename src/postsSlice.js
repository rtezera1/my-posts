import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS, SORT_ORDERS } from "./utils/constants";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
});

const postsSlice = createSlice({
  name: "posts",
  initialState: { items: [], status: "", sort: SORT_ORDERS.ASC },
  reducers: {
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = STATUS.SUCCEEDED;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = STATUS?.FAILED;
      });
  },
});

export const { setSort } = postsSlice.actions;
export default postsSlice.reducer;
