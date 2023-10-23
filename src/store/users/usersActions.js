import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { USERS_API } from "../../helpers/consts";


export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const { data } = await axios.get(USERS_API)
        return data
    }
    )