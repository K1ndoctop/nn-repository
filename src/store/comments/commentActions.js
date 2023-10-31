import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async () => {
    const { data } = await axios.get("http://localhost:8000/comments");
    return data;
  }
);

export const postComment = createAsyncThunk(
    "comments/postComment",
    async (comObj, {dispatch}) => {
      await axios.post("http://localhost:8000/comments", comObj);
      dispatch(getComments())
    }
  );


