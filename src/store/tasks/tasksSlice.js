import { createSlice } from "@reduxjs/toolkit";
import { getTasks, getOneTask, getCatygories } from "./tasksActions";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    loading: false,
    tasks: [],
    oneTask: null,
    currentPage: 1,
    totalPages: 1,
    currentCategory: "",
    search: "",
    categories: [],
  },
  reducers: {
    clearOneTaskState: (state) => {
      state.oneTask = null;
    },
    changePage: (state, action) => {
      state.currentPage = action.payload.page;
    },
    changeCategory: (state, action) => {
      if (action.payload.category === "all") {
        state.currentCategory = "";
      } else {
        state.currentCategory = action.payload.category;
      }
      state.currentPage = 1;
    },
    setSearchVal: (state, action) => {
      state.search = action.payload.search;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getTasks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getOneTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneTask.fulfilled, (state, action) => {
        state.loading = false;
        state.oneTask = action.payload;
      })
      .addCase(getOneTask.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCatygories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { clearOneTaskState, changePage, setSearchVal, changeCategory } =
  tasksSlice.actions;
export default tasksSlice.reducer;
