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

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user, { dispatch }) => {
    const { data } = await axios.post(REGISTER_API, user);
  }
);

// export const deleteUser = createAsyncThunk(
//     'users/deleteUsers',
//     async (id, {dispatch}) => {
//         console.log(id)
//         await axios.delete(${USERS_API}/${id})
//         dispatch(getUsers())
//     }
//     )

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
