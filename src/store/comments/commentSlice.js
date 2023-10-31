import { createSlice } from "@reduxjs/toolkit";
import { getComments, postComment } from "./commentActions";


const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        laoding: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getComments.pending, (state, action) => {
                state.laoding = true
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.laoding = true
                state.comments = action.payload
            })
            .addCase(postComment.pending, (state) => {
                state.laoding = true
            })
            .addCase(postComment.fulfilled, (state) => {
                state.laoding = false
            })
    }
})

export default commentSlice.reducer