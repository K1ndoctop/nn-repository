import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask, getCategories } from "../../../store/tasks/tasksActions";
import styles from "../../ribbon/post.module.css";
import { getAllUsers, setAllUsers } from "../../../store/users/usersActions";

const TasksCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    name: "",
    group: "",
    points: 0,
    description: "",
    isDone: false,
    isChecked: false,
  });

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      <div className={`w-full h-screen absolute ${styles.bg}`}></div>
      <div className="md:pl-32 w-full h-screen relative flex justify-center items-center overflow-hidden">
        <div className="lg:w-1/2 ml-16">
          <h3 className="pt-2 pb-4 text-2xl text-center font-semibold">
            Добавить задание
          </h3>
          <div className="sm:flex">
            <div className="flex flex-col lg:w-full">
              <input
                className="m-2 p-2 border rounded-lg"
                placeholder="Name"
                type="text"
                onChange={(e) => setTask({ ...task, name: e.target.value })}
              />

              <textarea
                className="m-2 p-2 border rounded-lg lg:h-32"
                placeholder="Description"
                type="text"
                onChange={(e) =>
                  setTask({ ...task, description: e.target.value })
                }
              />

              <textarea
                className="m-2 p-2 border rounded-lg"
                placeholder="Points"
                type="text"
                onChange={(e) => setTask({ ...task, points: e.target.value })}
              />

              <select
                className="m-2 p-2 border rounded-lg"
                onChange={(e) => setTask({ ...task, group: e.target.value })}
              >
                <option disabled>Choose group</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <button
                className="m-2 p-2 border rounded-lg bg-blue-400 hover:bg-blue-500"
                onClick={() => {
                  dispatch(createTask({ task }));

                  navigate("/tasks");
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksCreate;
