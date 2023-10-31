import React from "react";
import { useNavigate } from "react-router-dom";

const Voting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/createVoting");
        }}
      >
        Новое Голосование
      </button>
    </div>
  );
};

export default Voting;
