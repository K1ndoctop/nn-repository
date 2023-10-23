import {createSlice} from '@reduxjs/toolkit'
import { getUsers } from './usersActions'

const usersSlice = createSlice({
    name: 'users',
    initialState : {
        users: [],
        loading: false,
        oneUser: ''
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.)
    }
})