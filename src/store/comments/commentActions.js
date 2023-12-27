import { create } from "@mui/material/styles/createTransitions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async () => {
    const { data } = await axios.get("http://localhost:8000/comments");
    return data;
  }
);

export const postComment = createAsyncThunk(
  "comments/postComment",
  async (comObj, { dispatch }) => {
    await axios.post("http://localhost:8000/comments", comObj);
    dispatch(getComments());
  }
);

export const addLike = createAsyncThunk(
  "comments/addLike",
  async ({ user, id }, { getState, dispatch }) => {
    try {
      const state = getState();
      const { comments } = state.comments;
      const commentIndex = comments.findIndex((item) => item.id === id);

      // Создаем глубокую копию комментария
      const updatedComment = _.cloneDeep(comments[commentIndex]);

      const newLike = {
        oneUserId: user.id,
        email: user.email,
      };

      updatedComment.likes.push(newLike);

      // Отправляем запрос на сервер
      await axios.patch(`http://localhost:8000/comments/${id}`, updatedComment);

      // Обновляем стейт с использованием глубокой копии
      const updatedComments = [...comments];
      updatedComments[commentIndex] = updatedComment;
      dispatch(getComments());
      // Возвращаем обновленный комментарий
      return updatedComment;
    } catch (error) {
      throw error; // Можно обработать ошибку здесь
    }
  }
);
