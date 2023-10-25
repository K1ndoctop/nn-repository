import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsAction";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
  },
});

export default postsSlice.reducer;
