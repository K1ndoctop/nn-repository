import React from "react";
import TasksList from "../../components/tasks/TasksList/TasksList";
import { useNavigate } from "react-router-dom";
import TasksPagination from "../../components/tasks/TasksPagination/TasksPagination";
import TasksSearch from "../../components/tasks/TasksSearch/TasksSearch";
import TasksFilter from "../../components/tasks/TasksFilter/TasksFilter";

const TasksPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ width: "90%", margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <TasksFilter />
          <TasksSearch />
          <TasksPagination />
        </div>
        <div className="">
          <TasksList />
        </div>
        <button
          onClick={() => navigate("/tasksCreate")}
          id="create--task"
          style={{
            border: "1px solid black",
            borderRadius: "100%",
            padding: "0px 5px",
            backgroundColor: "green",
            color: "white",
            fontSize: "24px",
            position: "absolute",
            right: "0px",
            bottom: "0px",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TasksPage;
