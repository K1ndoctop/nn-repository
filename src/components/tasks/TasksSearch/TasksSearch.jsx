import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchVal } from "../../../store/tasks/tasksSlice";
import { getTasks } from "../../../store/tasks/tasksActions";

const TasksSearch = () => {
  const { search } = useSelector((state) => state.tasks);
  const [searchValue, setSearchValue] = useState(search);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Поиск..."
          className="search--input"
          onChange={(e) => {
            setSearchValue(e.target.value);
            dispatch(setSearchVal({ search: e.target.value }));
            dispatch(getTasks());
          }}
          value={searchValue}
        />
      </div>
    </div>
  );
};

export default TasksSearch;
