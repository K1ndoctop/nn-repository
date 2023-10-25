import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_API } from "../../helpers/consts";
import { Await } from "react-router-dom";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await axios.get(`${POSTS_API}/products/`);
  return data.results;
});

export const getOnePost = createAsyncThunk(
  "products/getOnePost",
  async (id) => {
    const { data } = await axios.get(`${POSTS_API}/products/${id}/`);
    console.log(data);
    return data;
  }
);

export const setPosts = createAsyncThunk(
  "posts/setPosts",
  async ({ post }, { dispatch }) => {
    await axios.post(`${POSTS_API}/products/`, post);
    dispatch(getPosts());
  }
);

export const editPost = createAsyncThunk(
  "posts/editPosts",
  async ({ post }, { dispatch }) => {
    await axios.patch(`${POSTS_API}/products/${post.id}/`, post);
    dispatch(getPosts());
  }
);

export const deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async ({ id }, { dispatch }) => {
    await axios.delete(`${POSTS_API}/products/${id}/`);
    dispatch(getPosts());
  }
);
