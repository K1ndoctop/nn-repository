import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSLice";
import postsReducer from "./posts/postsSlice";
import tasksReducer from "./tasks/tasksSlice";
import commentSlice from "./comments/commentSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    tasks: tasksReducer,
    comments: commentSlice,
  },
});
