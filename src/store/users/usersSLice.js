import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./usersActions";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: "",
    loading: false,
    error: "",
    oneUser: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getUser.pending, (state, action ) => {
            state.loading = true
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.oneUser = action.payload
            state.loading = false
        })
}
});

export default usersSlice.reducer;
