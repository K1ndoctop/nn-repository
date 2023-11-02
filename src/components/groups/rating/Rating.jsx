import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllUsers, getOneUser } from "../../../store/users/usersActions";
import { useNavigate } from "react-router-dom";
import "./Rating.css";

const Rating = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    dispatch(getOneUser());
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    const sorted = [...users].sort((a, b) => b.KPI - a.KPI);
    setSortedUsers(sorted);
  }, [users]);

  return (
    <div className="rating">
      <nav
        className="ratingNav"
        style={{
          margin: "20px auto",
          width: "80%",
          display: "flex",
          justifyContent: "space-evenly",
          fontSize: "24px",
        }}
      >
        <a
          onClick={() => {
            navigate("/group");
          }}
        >
          Группа
        </a>
        <a
          onClick={() => {
            navigate("/rating");
          }}
        >
          Рейтинг
        </a>
        {/* <a
          onClick={() => {
            navigate("/voting");
          }}
        >
          Голосования
        </a> */}
      </nav>
      <table className="rating-table">
        <thead className="rating-head">
          <tr>
            <th>Имя Студента</th>
            <th>Группа</th>
            <th>KPI</th>
          </tr>
        </thead>
        {sortedUsers.map((item) => {
          return (
            <tbody className="table-body">
              <tr>
                <td>{item.first_name}</td>
                <td>{item.groups}</td>
                <td>{item.KPI}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Rating;
