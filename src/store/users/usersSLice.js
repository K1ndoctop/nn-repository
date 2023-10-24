import {createSlice} from '@reduxjs/toolkit'
import { getUsers, registerUser } from './usersActions'

const usersSlice = createSlice({
    name: 'users',
    initialState : {
        users: '',
        loading: false,
        error: '',
        oneUser: ''
    },
    reducers: {
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(registerUser.fulfilled, (state) => {
                
    //         })
    // }
})

export default usersSlice.reducer