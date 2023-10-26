import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTask } from "../../../store/tasks/tasksActions";

const TasksItem = ({ task }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <div
      style={{ border: "1px solid black", borderRadius: "5px", width: "80%" }}
    >
      <div className="">
        <h4>Task name: {task.name}</h4>
        <p>Points: {task.points}</p>
        <span>Group: {task.group}</span>
      </div>
      <div className="">
        <p>Description: {task.description}</p>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{ color: "green" }}
          onClick={() => navigate(`/tasks/${task.id}`)}
        >
          Details...
        </button>
        <button
          onClick={() => dispatch(deleteTask({ id: task.id }))}
          style={{ color: "red" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TasksItem;
