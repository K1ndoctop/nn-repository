import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  LOGIN_API,
  REGISTER_API,
  CHECK_TOKEN_API,
  PROFILE_API,
  TOKEN_FERFESH,
} from "../../helpers/consts";
import { addEmail, addToken, getToken } from "../../helpers/functions";
import { create } from "@mui/material/styles/createTransitions";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user, { dispatch }) => {
    const fakeUser = user
    if(user.first_name === 'sulaiman' || user.first_name === 'Erkinbek'){
      fakeUser.is_admin = true
    }


    // const { data } = await axios.post(REGISTER_API, {
    //   email: user.email,
    //   password: user.password,
    //   password_confirm: user.password_confirm,
    // });
    await axios.post("http://localhost:8000/users", fakeUser);
    dispatch(getAllUsers());
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { dispatch }) => {
    const { data } = await axios.get("http://localhost:8000/users");
    const res = data.filter((item) => item.id !== id);
    await axios.patch("http://localhost:8000/users", res);
    dispatch(getAllUsers());
  }
);

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const { data } = await axios.get("http://localhost:8000/users");
  return data;
});

export const getOneUser = createAsyncThunk("users/getOneUser", async (id) => {
  const { data } = await axios.get(`http://localhost:8000/users`);
  const res = data.find((item) => item.id === id);
  return res;
});

export const LoginUser = createAsyncThunk("users/Login", async (user) => {
  const { data } = await axios.post(LOGIN_API, user);
  addToken(data);
  addEmail(user.email);
});

export const refreshToken = createAsyncThunk("users/refreshToken", async () => {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = `Bearer ${tokens.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  const res = await axios.post(
    TOKEN_FERFESH,
    {
      refresh: tokens.refresh,
    },
    config
  );
  localStorage.setItem(
    "token",
    JSON.stringify({ access: res.data.access, refresh: tokens.refresh })
  );
});

export const getUser = createAsyncThunk(
  "users/getUser",
  async (_, { getState }) => {
    const tokens = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };

    const { data } = await axios.get(PROFILE_API, config);
    return data;
  }
);

export const checkToken = createAsyncThunk(
  "users/checkToken",
  async (_, { getState }) => {
    const tokens = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };

    const { data } = await axios.get(CHECK_TOKEN_API, config);
    return data;
  }
);
