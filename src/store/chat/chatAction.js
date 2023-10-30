import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CHAT_USERS_API } from "../../helpers/consts";

export const addUserChat = createAsyncThunk("chats/addUserChat", async (id) => {
  const { data } = await axios.get(`${CHAT_USERS_API}/${id}`);
});
