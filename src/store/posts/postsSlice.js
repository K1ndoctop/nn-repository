import { createSlice } from "@reduxjs/toolkit";
import { getOnePost, getPosts, totalPagePosts } from "./postsAction";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    onePost: null,
    loading: false,
    status: "",
    currentPage: 1,
    totalPages: 5,
  },
  reducers: {
    changePostPage: (state, action) => {
      state.currentPage = action.payload.page;
    },
    clearOnePost: (state) => {
      state.onePost = null;
    },
  },
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
    // .addCase(totalPagePosts.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(totalPagePosts.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.totalPages = action.payload;
    //   console.log(state.totalPages);
    // })
    // .addCase(totalPagePosts.rejected, (state) => {
    //   state.loading = false;
    //   state.status = "error";
    // });
  },
});

export const { changePostPage, clearOnePost } = postsSlice.actions;
export default postsSlice.reducer;
