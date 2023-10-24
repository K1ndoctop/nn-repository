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
      <div className=""></div>
      <div className="">
        <TasksFilter />
        <TasksSearch />
        <TasksPagination />
        <TasksList />
      </div>
      <button
        onClick={() => navigate("/tasksCreate")}
        id="create--task"
        style={{
          border: "1px solid black",
          borderRadius: "50%",
          padding: "0px 5px",
          backgroundColor: "green",
          color: "white",
          fontSize: "24px",
        }}
      >
        +
      </button>
    </div>
  );
};

export default TasksPage;
