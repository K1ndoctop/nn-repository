import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  LOGIN_API,
  REGISTER_API,
  CHECK_TOKEN_API,
  PROFILE_API,
  TOKEN_FERFESH,
  USERS_API,
} from "../../helpers/consts";
import {
  addEmail,
  addToken,
  getEmail,
  getToken,
} from "../../helpers/functions";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user, { dispatch }) => {
    const fakeUser = user;
    if (user.email === "sulaimanmind2004@gmail.com") {
      fakeUser.is_admin = true;
      const { data } = await axios.post(REGISTER_API, {
        email: user.email,
        password: user.password,
        password_confirm: user.password_confirm,
      });
      await axios.post("http://localhost:8000/users", fakeUser);
      dispatch(getAllUsers());
    } else {
      await axios.post("http://localhost:8000/users", fakeUser);
      dispatch(getAllUsers());
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { dispatch }) => {
    const { data } = await axios.get("http://localhost:8000/users");
    const res = data.filter((item) => item.id !== id);
    await axios.patch(USERS_API, res);
    dispatch(getAllUsers());
  }
);

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const { data } = await axios.get(USERS_API);
  return data;
});

export const getOneUser = createAsyncThunk("users/getOneUser", async () => {
  const email = getEmail()
  const { data } = await axios.get(`http://localhost:8000/users`);
  const res = data.find((item) => item.email === email);
  return res;
});

export const LoginUser = createAsyncThunk(
  "users/LoginUser",
  async (user, { getState, dispatch }) => {
    if (user.email === "azo@gmail.com") {
      const { data } = await axios.post(LOGIN_API, user);
      addToken(data);
      addEmail(user.email);
    } else {
      await dispatch(getAllUsers());

      const currentState = getState();

      const Allusers = currentState.users.users;
      console.log(Allusers, "dwd");

      const someData = Allusers.find((item) => item.email === user.email);

      if (someData) {
        addToken(
          "cne23980efk3e354678dgyvcbiqfhc0r9y8-0x92c-n4f302lreflrecelk134wlke1234fkjenrfkjwnefjk4324erjk42342r34j423ghbvder34jk34lgv "
        );
        addEmail(user.email);
      }
    }
  }
);

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

export const changePassword = createAsyncThunk(
  "users/changePassword",
  async (passwod) => {
    const { data } = await axios.get(`http://localhost:8000/users`);
    const email = getEmail();
    const res = data.find((item) => item.email == email);
    console.log(email);
    console.log(data);
    console.log(res);
    res.password = passwod;
    res.password_confirm = passwod;
    await axios.patch(`http://localhost:8000/users/${res.id}`, res);
    return res;
  }
);

export const getOneChatUser = createAsyncThunk(
  "users/getOneChatUser",
  async (id) => {
    const data = await axios.get(`${USERS_API}/${id}`);
    return data.data;
  }
);