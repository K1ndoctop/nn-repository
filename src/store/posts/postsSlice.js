import { createSlice } from "@reduxjs/toolkit";
import { getOnePost, getPosts } from "./postsAction";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    onePost: null,
    loading: false,
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      })
      .addCase(getOnePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOnePost.fulfilled, (state, action) => {
        state.loading = false;
        state.onePost = action.payload;
      })
      .addCase(getOnePost.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      });
  },
});

export default postsSlice.reducer;
