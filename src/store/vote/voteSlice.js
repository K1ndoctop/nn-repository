import { createSlice } from "@reduxjs/toolkit";
import { getVotings, getOneVoting, getCategories } from "./voteActions";

const votingsSlice = createSlice({
  name: "votings",
  initialState: {
    loading: false,
    votings: [],
    oneVoting: null,
    currentPage: 1,
    totalPages: 1,
    currentCategory: "",
    search: "",
    categories: [],
  },
  reducers: {
    clearOneVotingState: (state) => {
      state.oneVoting = null;
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
      .addCase(getVotings.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVotings.fulfilled, (state, action) => {
        state.loading = false;
        state.votings = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getVotings.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getOneVoting.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneVoting.fulfilled, (state, action) => {
        state.loading = false;
        state.oneVoting = action.payload;
      })
      .addCase(getOneVoting.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { clearOneVotingState, changePage, setSearchVal, changeCategory } =
  votingsSlice.actions;
export default votingsSlice.reducer;
