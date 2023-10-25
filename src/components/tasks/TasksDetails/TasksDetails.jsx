import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTask } from "../../../store/tasks/tasksActions";
import { clearOneTaskState } from "../../../store/tasks/tasksSlice";

const TasksDetails = () => {
  const { loading, oneTask } = useSelector((state) => state.tasks);

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneTask({ id }));
    return () => dispatch(clearOneTaskState());
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        oneTask && (
          <div className="">
            <p>Task name: {oneTask.name}</p>
            <p>Points: {oneTask.points}</p>
            <p>Group: {oneTask.group}</p>
            <p>Description: {oneTask.description}</p>
            <button onClick={() => navigate(`/tasks-edit/${id}`)}>Edit</button>
          </div>
        )
      )}
    </div>
  );
};

export default TasksDetails;
