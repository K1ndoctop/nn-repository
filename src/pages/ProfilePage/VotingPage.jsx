import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getOneUser } from "../../store/users/usersActions";
import { Link } from "react-router-dom";

const VotingPage = () => {
  const dispatch = useDispatch();
  const { oneUser, loading } = useSelector((state) => state.users);
  const { users } = useSelector((state) => state.users);
  const [group, setGroup] = useState([]);

  useEffect(() => {
    dispatch(getOneUser());
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (oneUser) {
      setGroup(oneUser.groups);
    }
  }, [oneUser]);

  return (
    <div className="">
      {group.map((item) => (
        <div>
          <h1>My Group</h1>
          <h2>group:{item}</h2>
          <h3>name: {oneUser.first_name}</h3>
          <h3>last_name: {oneUser.last_name}</h3>
          <a href="">
            <Link to="/vote">голосовать</Link>
          </a>
        </div>
      ))}
    </div>
  );
};

export default VotingPage;
