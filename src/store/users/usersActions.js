import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USERS_API, LOGIN_API } from "../../helpers/consts";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const { data } = await axios.get(USERS_API);
  return data;
});

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  await axios.post(USERS_API, user);
});

// export const Login = createAsyncThunk(
//     'users/Login',
//     async (user) => {
//     const { data } = await axios.post(LOGIN_API, id)
//     }
//     )
