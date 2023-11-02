import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GroupComponent from "../../components/groups/gruopComponent/GroupComponent";
import "./GroupPage.css";
const GroupPage = () => {
  const navigate = useNavigate();
  return (
    <div className="groupPage">
      <nav
        className="groupNav"
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
        <a
          onClick={() => {
            navigate("/voting");
          }}
        >
          Голосования
        </a>
      </nav>
      <GroupComponent />
    </div>
  );
};

export default GroupPage;
