import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../store/tasks/tasksSlice";
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import { getTasks } from "../../../store/tasks/tasksActions";

export default function PaginationControlled() {
  const { currentPage, totalPages } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(changePage({ page: value }));
    dispatch(getTasks());
  };
  return (
    <Stack sx={{ marginTop: "0" }} className="pagination">
      <Pagination
        className="paginationBody"
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
