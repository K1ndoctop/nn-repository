import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chats",
  initialState: {
    user: [],
    loading: false,
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});
