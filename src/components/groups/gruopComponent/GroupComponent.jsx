import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllUsers, getOneUser } from "../../../store/users/usersActions";

const GroupComponent = () => {
  const dispatch = useDispatch();
  const { oneUser, loading } = useSelector((state) => state.users);
  const { users } = useSelector((state) => state.users);
  const [user, setUser] = useState([]);
  const [group, setGroups] = useState(["JS-35", "JS-36"]);

  useEffect(() => {
    dispatch(getOneUser());
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (users) {
      setUser(users);
    }
  }, [users]);

  return (
    <div className="">
      <div>
        <h1>My Group</h1>
        <h3>{oneUser.groups}</h3>
        {user.map((item) => {
          if (oneUser.groups === item.groups) {
            return <p>{item.first_name}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default GroupComponent;
