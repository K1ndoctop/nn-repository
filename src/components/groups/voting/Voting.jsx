import React from "react";
import { useNavigate } from "react-router-dom";
import "./Voting.css";

const Voting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="voteNav">
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
    </div>
  );
};

export default Voting;
