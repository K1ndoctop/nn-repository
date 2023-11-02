import React from "react";
import TasksList from "../../components/tasks/TasksList/TasksList";
import { useNavigate } from "react-router-dom";
import TasksPagination from "../../components/tasks/TasksPagination/TasksPagination";
import TasksSearch from "../../components/tasks/TasksSearch/TasksSearch";
import TasksFilter from "../../components/tasks/TasksFilter/TasksFilter";
import Burger from "../../components/ui/Burger/Burger";
import Sidebar from "../../components/ui/Sidebar/Sidebar";

const TasksPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100%" }}>
      <Sidebar />
      <div
        style={{
          paddingTop: "100px",
          width: "90%",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <TasksFilter />
          <TasksSearch />
          <TasksPagination />
        </div>
        <div className="">
          <TasksList />
        </div>
        <div
          className="w-12 h-12 bg-green-700 rounded-full border-black border flex justify-center items-center fixed bottom-16 right-16"
          onClick={() => navigate("/tasksCreate")}
        >
          <button
            className="text-white text-3xl font-semibold -mt-2 "
            id="create--task"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
