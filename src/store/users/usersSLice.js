import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getOneChatUser,
  getOneUser,
  getUser,
} from "./usersActions";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: "",
    oneUser: "",
    oneChat: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.oneUser = action.payload;
        state.loading = false;
      })
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getOneUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.oneUser = action.payload;
        state.loading = false;
        console.log(state.oneUser);
      })
      .addCase(getOneChatUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneChatUser.fulfilled, (state, action) => {
        state.loading = false;
        state.oneChat = action.payload;
      })
      .addCase(getOneChatUser.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      });
  },
});

export default usersSlice.reducer;
