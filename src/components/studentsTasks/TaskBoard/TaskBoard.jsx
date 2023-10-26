import React, { useEffect } from "react";
import TasksItem from "../../tasks/TasksItem/TasksItem";
import { useDispatch } from "react-redux";
import { getTasks } from "../../../store/tasks/tasksActions";

const TaskBoard = ({
  tasks,
  title,
  isDone,
  handleDragStart,
  handleDragOver,
  handleDrop,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div
      className="board"
      onDragOver={handleDragOver}
      onDrop={(event) => handleDrop(event, isDone)}
    >
      <div className="board--title">{title}</div>
      {tasks.map((task) => (
        <div
          key={task.id}
          draggable
          onDragStart={(event) => handleDragStart(event, task.id)}
        >
          <TasksItem task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
