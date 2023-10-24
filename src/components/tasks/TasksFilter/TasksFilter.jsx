import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, getCategories } from "../../../store/tasks/tasksActions";
import { changeCategory } from "../../../store/tasks/tasksSlice";

const TasksFilter = () => {
  const { categories, currentCategory } = useSelector((state) => state.tasks);
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(changeCategory({ category }));
    dispatch(getTasks());
  }, [category]);

  useEffect(() => {
    if (!currentCategory) {
      setCategory("all");
    }
  }, [currentCategory]);

  return (
    <div>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">all</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TasksFilter;
