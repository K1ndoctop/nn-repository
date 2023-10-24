import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editTask,
  getCategories,
  getOneTask,
} from "../../../store/tasks/tasksActions";
import { clearOneTaskState } from "../../../store/tasks/tasksSlice";

const TasksEdit = () => {
  const { loading, oneTask, categories } = useSelector((state) => state.tasks);

  const [task, setTask] = useState(oneTask);

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneTask({ id }));
    dispatch(getCategories());
    return () => dispatch(clearOneTaskState());
  }, []);

  useEffect(() => {
    if (oneTask) {
      setTask(oneTask);
    }
  }, [oneTask]);
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h3>Edit Task</h3>
          <input
            placeholder="Name"
            type="text"
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />

          <input
            placeholder="Description"
            type="text"
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />

          <input
            placeholder="Points"
            type="number"
            onChange={(e) => setTask({ ...task, points: e.target.value })}
          />

          <select onChange={(e) => setTask({ ...task, group: e.target.value })}>
            <option disabled>Choose group</option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>

          <button
            onClick={() => {
              dispatch(editTask({ task }));
              navigate("/tasks");
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default TasksEdit;
