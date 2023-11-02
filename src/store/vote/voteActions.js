import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { VOTINGS_API } from "../../helpers/consts";
import { getTotalPages } from "../../helpers/functions";

export const getVotings = createAsyncThunk(
  "voting/getVotings",
  async (_, { getState }) => {
    const { currentPage, currentCategory, search } = getState().votings;
    const categoryAndSearchParams = `q=${search}${
      currentCategory && `&week=${currentCategory}`
    }`;
    const pagesLimitParams = `?_page=${currentPage}&_limit=8`;
    const totalPages = await getTotalPages(
      `${VOTINGS_API}?${categoryAndSearchParams}`
    );

    const { data } = await axios.get(
      `${VOTINGS_API}${pagesLimitParams}&${categoryAndSearchParams}`
    );
    return { data, totalPages };
  }
);

export const createVoting = createAsyncThunk(
  "voting/createVoting",
  async ({ voting }, { dispatch }) => {
    await axios.post(VOTINGS_API, voting);
    dispatch(getVotings());
    return voting;
  }
);

export const editVoting = createAsyncThunk(
  "voting/editVoting",
  async ({ voting }, { dispatch }) => {
    await axios.patch(`${VOTINGS_API}/${voting.id}`, voting);
    dispatch(getVotings());
  }
);

export const deleteVoting = createAsyncThunk(
  "voting/deleteVoting",
  async ({ id }, { dispatch }) => {
    await axios.delete(`${VOTINGS_API}/${id}`);
    dispatch(getVotings());
  }
);

export const getOneVoting = createAsyncThunk(
  "voting/getOneVoting",
  async ({ id }) => {
    const { data } = await axios.get(`${VOTINGS_API}/${id}`);
  }
);

export const getCategories = createAsyncThunk(
  "tasks/getCategories",
  async () => {
    const { data } = await axios.get(VOTINGS_API);
    const uniqueCategories = new Set(data.map((voting) => voting.week));
    const categories = [];
    for (let i of uniqueCategories) {
      categories.push(i);
    }
    return categories;
  }
);
