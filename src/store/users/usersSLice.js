// import {createSlice} from '@reduxjs/toolkit'
// import { getUsers } from './usersActions'

// const usersSlice = createSlice({
//     name: 'users',
//     initialState : {
//         users: '',
//         loading: false,
//         error: '',
//         oneUser: ''
//     },
//     reducers: {
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(getUsers.pending, (state) =>{
//                 state.loading = true
//             })
//             .addCase(getUsers.fulfilled, (state, action) => {
//                 state.users = action.payload
//                 state.loading = false
//             })
//             .addCase(getUsers.rejected, (state) => {
//                 state.error = true
//             })
//     }
// })

// export default usersSlice.reducer
