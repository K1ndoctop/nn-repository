import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GroupComponent from "../../components/groups/gruopComponent/GroupComponent";

const GroupPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <a
          onClick={() => {
            navigate("/groups");
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
