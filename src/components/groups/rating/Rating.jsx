import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllUsers, getOneUser } from "../../../store/users/usersActions";

const Rating = () => {
  const dispatch = useDispatch();
  const { oneUser, loading } = useSelector((state) => state.users);
  const { users } = useSelector((state) => state.users);

  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    dispatch(getOneUser());
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    // Когда users обновляется, сортируем их по KPI и обновляем состояние sortedUsers
    const sorted = [...users].sort((a, b) => b.KPI - a.KPI);
    setSortedUsers(sorted);
  }, [users]);

  return (
    <div>
      {sortedUsers.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.first_name}</p>
            <p>{item.KPI}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
