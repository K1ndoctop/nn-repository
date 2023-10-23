import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../../store/tasks/tasksActions";
import TasksItem from "../TasksItem/TasksItem";

const TasksList = () => {
  const { tasks, loading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {tasks.map((task) => (
            <TasksItem key={task.id} task={task} />
          ))}
        </>
      )}
    </div>
  );
};

export default TasksList;
