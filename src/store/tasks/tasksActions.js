import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TASKS_API, USERS_API } from "../../helpers/consts";
import { getTotalPages } from "../../helpers/functions";

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (_, { getState }) => {
    const { currentPage, currentCategory, search } = getState().tasks;
    const categoryAndSearchParams = `q=${search}${
      currentCategory && `&group=${currentCategory}`
    }`;
    const pagesLimitParams = `?_page=${currentPage}&_limit=8`;
    const totalPages = await getTotalPages(
      `${TASKS_API}?${categoryAndSearchParams}`
    );

    const { data } = await axios.get(
      `${TASKS_API}${pagesLimitParams}&${categoryAndSearchParams}`
    );
    return { data, totalPages };
  }
);

export const getOneTask = createAsyncThunk(
  "tasks/getOneTask",
  async ({ id }) => {
    const { data } = await axios.get(`${TASKS_API}/${id}`);
    return data;
  }
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async ({ task }, { dispatch, getState }) => {
    const { users } = getState().users;

    const newUsers = users.filter((user) => user.groups === task.group);

    pushTasks(newUsers, task);

    await axios.post(TASKS_API, task);
    dispatch(getTasks());
    return task;
  }
);

const pushTasks = (users, task) => {
  try {
    const updatedUsers = users.map((user) => {
      // Создаем копию пользователя и массива board_1
      const userCopy = { ...user };
      userCopy.tasks = { ...user.tasks, board_1: [...user.tasks.board_1] };
      // Добавляем значение в массив board_1
      userCopy.tasks.board_1.push(task);
      axios.patch(`${USERS_API}/${user.id}`, userCopy);
      return userCopy;
    });
    console.log(updatedUsers);
  } catch (err) {
    console.log(err);
  }
};

export const editTask = createAsyncThunk(
  "tasks/editTask",
  async ({ task }, { dispatch }) => {
    await axios.patch(`${TASKS_API}/${task.id}`, task);
    dispatch(getTasks());
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async ({ id }, { dispatch }) => {
    await axios.delete(`${TASKS_API}/${id}`);
    dispatch(getTasks());
  }
);

export const getCategories = createAsyncThunk(
  "tasks/getCategories",
  async () => {
    const { data } = await axios.get(TASKS_API);
    const uniqueCategories = new Set(data.map((task) => task.group));
    const categories = [];
    for (let i of uniqueCategories) {
      categories.push(i);
    }
    return categories;
  }
);
