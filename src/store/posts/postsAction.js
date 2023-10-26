import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_API } from "../../helpers/consts";
import { Await } from "react-router-dom";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { getState }) => {
    const { currentPage } = getState().posts;
    const page = `?page=${currentPage}`;
    const { data } = await axios.get(`${POSTS_API}/products/${page}`);
    return data.results;
  }
);

// export const getOnePost = createAsyncThunk(
//   "products/getOnePost",
//   async ({ id }) => {
//     const { data } = await axios.get(`${POSTS_API}/products/${id}/`);
//     return data;
//   }
// );

export const getOnePost = createAsyncThunk(
  "posts/getOnePost",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${POSTS_API}/products/${id}/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const setPosts = createAsyncThunk(
  "posts/setPosts",
  async ({ addPost }) => {
    const postData = new FormData();
    postData.append("title", addPost.title);
    postData.append("description", addPost.description);
    postData.append("price", addPost.price);
    postData.append("category", addPost.category);

    const tokens = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    await axios
      .post(`${POSTS_API}/products/`, postData, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
);

export const editPostFunc = createAsyncThunk(
  "posts/editPosts",
  async ({ postEdit }, { dispatch }) => {
    const postObj = {
      title: postEdit.title,
      description: postEdit.description,
      price: postEdit.price,
      category: postEdit.category,
      // author: postEdit.author,
      // reviews: postEdit.reviews,
      // likes: postEdit.likes,
      // is_author: postEdit.is_author,
      // liked_by_user: postEdit.liked_by_user,
      // favorite_by_user: postEdit.favorite_by_user,
    };

    const tokens = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    await axios
      .patch(`${POSTS_API}/products/${postEdit.id}/`, postObj, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    dispatch(getPosts());
  }
);

export const deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async ({ id }, { dispatch }) => {
    const tokens = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    await axios.delete(`${POSTS_API}/products/${id}/`, config);
    dispatch(getPosts());
  }
);
