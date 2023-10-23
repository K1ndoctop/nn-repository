import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask, getCatygories } from "../../../store/tasks/tasksActions";

const TasksCreate = () => {
  const { categories } = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    name: "",
    description: "",
    points: 0,
    group: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatygories());
  }, []);
  console.log(categories);

  return (
    <div>
      <h3>Create Task</h3>
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

      <select onChange={(e) => setTask({ ...task, type: e.target.value })}>
        <option disabled>Choose group</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>

      <button
        onClick={() => {
          dispatch(createTask({ task }));
          navigate("./tasks");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default TasksCreate;
