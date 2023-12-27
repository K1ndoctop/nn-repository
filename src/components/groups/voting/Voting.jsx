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
        className=" bg-emerald-300"
      >
        Новое Голосование
      </button>
    </div>
  );
};

export default Voting;
