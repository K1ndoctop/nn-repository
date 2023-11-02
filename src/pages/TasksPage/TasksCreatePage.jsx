import React from "react";
import TasksCreate from "../../components/tasks/TasksCreate/TasksCreate";
import Burger from "../../components/ui/Burger/Burger";
import Sidebar from "../../components/ui/Sidebar/Sidebar";

const TasksCreatePage = () => {
  return (
    <div>
      <Sidebar />
      <TasksCreate />
    </div>
  );
};

export default TasksCreatePage;
