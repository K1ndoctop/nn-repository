import React from "react";
import TasksCreate from "../../components/tasks/TasksCreate/TasksCreate";
import Burger from "../../components/ui/Burger/Burger";

const TasksCreatePage = () => {
  return (
    <div>
      <Burger />
      <TasksCreate />
    </div>
  );
};

export default TasksCreatePage;
