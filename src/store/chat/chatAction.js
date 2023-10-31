import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CHAT_USERS_API, USERS_API } from "../../helpers/consts";

export const addUserChat = createAsyncThunk(
  "chats/addUserChat",
  async (user, { getState }) => {
    const { oneUsers } = getState().users;
    const userChat = {
      first_name: user.first_name,
      last_name: user.last_name,
      history: [],
    };
    // oneUsers.chat.push();
    console.log(userChat);
    const data = await axios.patch(`${USERS_API}/${oneUsers.id}`);
  }
);
