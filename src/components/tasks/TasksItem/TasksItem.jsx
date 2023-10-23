import React from "react";
import { useNavigate } from "react-router-dom";

const TasksItem = ({ task }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/tasks/${task.id}`)}>
      <div className="">
        <h4>{task.name}</h4>
        <p>{task.points}</p>
        <span>{task.group}</span>
      </div>
      <div className="">
        <p>{task.description}</p>
      </div>
    </div>
  );
};

export default TasksItem;
