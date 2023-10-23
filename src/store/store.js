import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSLice";
import tasksReducer from "./tasks/tasksSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: usersReducer,
    tasks: tasksReducer,
  },
});
