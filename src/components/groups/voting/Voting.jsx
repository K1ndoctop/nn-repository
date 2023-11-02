import React from "react";
import { useNavigate } from "react-router-dom";

const Voting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
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

      <button
        onClick={() => {
          navigate("/createVoting");
        }}
      ></button>
    </div>
  );
};

export default Voting;
