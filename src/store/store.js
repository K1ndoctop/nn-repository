import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSLice";
import postsReducer from "./posts/postsSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});
