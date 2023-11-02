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
        <div
          // style={{
          //   display: "flex",
          //   flexWrap: "wrap",
          //   gap: "20px",
          //   width: "100%",
          //   margin: "0 auto",
          // }}
          className="flex flex-wrap w-full m-auto h-screen gap-8 pt-4"
        >
          {tasks.map((task) => (
            <TasksItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TasksList;
