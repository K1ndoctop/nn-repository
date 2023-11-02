import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOneUser } from "../../store/users/usersActions";
import { useSelector } from "react-redux";

const EditKPI = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { oneUser, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getOneUser());
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <h1>
        Оценки студента {oneUser.first_name} {oneUser.last_name}{" "}
      </h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Хакатон HTML & CSS</p>{" "}
        <input type="number" placeholder="Введите оценку студента" />
        <button style={{ color: "green" }}>Подтвердить</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Интервью HTML & CSS</p>{" "}
        <input type="number" placeholder="Введите оценку студента" />
        <button style={{ color: "green" }}>Подтвердить</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Хакатон основы JS</p>{" "}
        <input type="number" placeholder="Введите оценку студента" />
        <button style={{ color: "green" }}>Подтвердить</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Интервью основы JS</p>{" "}
        <input type="number" placeholder="Введите оценку студента" />
        <button style={{ color: "green" }}>Подтвердить</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Хакатон Native JS</p>{" "}
        <input type="number" placeholder="Введите оценку студента" />
        <button style={{ color: "green" }}>Подтвердить</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Командный Хакатон React</p>{" "}
        <input type="number" placeholder="Введите оценку студента" />
        <button style={{ color: "green" }}>Подтвердить</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Инртервью Финал</p>{" "}
        <input type="number" placeholder="Введите оценку студента" />
        <button style={{ color: "green" }}>Подтвердить</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Хакатон Финал</p>{" "}
        <input type="number" placeholder="Введите оценку студента" />
        <button style={{ color: "green" }}>Подтвердить</button>
      </div>
    </div>
  );
};

export default EditKPI;
