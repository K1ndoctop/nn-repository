// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getOneUser, updateKPI } from "../../store/users/usersActions";
// import { useSelector } from "react-redux";

// const EditKPI = () => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   const { oneUser, loading } = useSelector((state) => state.users);

//   useEffect(() => {
//     dispatch(getOneUser());
//   }, []);

//   return (
//     <div
//       style={{
//         padding: "20px",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "40px",
//       }}
//     >
//       <h1>
//         Оценки студента {oneUser.first_name} {oneUser.last_name}{" "}
//       </h1>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <p>Хакатон HTML & CSS</p>{" "}
//         <input
//           type="number"
//           placeholder="Введите оценку студента"
//           min={0}
//           max={200}
//         />
//         <button style={{ color: "green" }}>Подтвердить</button>
//       </div>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <p>Интервью HTML & CSS</p>{" "}
//         <input
//           type="number"
//           placeholder="Введите оценку студента"
//           min={0}
//           max={200}
//         />
//         <button style={{ color: "green" }}>Подтвердить</button>
//       </div>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <p>Хакатон основы JS</p>{" "}
//         <input
//           type="number"
//           placeholder="Введите оценку студента"
//           min={0}
//           max={200}
//         />
//         <button style={{ color: "green" }}>Подтвердить</button>
//       </div>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <p>Интервью основы JS</p>{" "}
//         <input
//           type="number"
//           placeholder="Введите оценку студента"
//           min={0}
//           max={200}
//         />
//         <button style={{ color: "green" }}>Подтвердить</button>
//       </div>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <p>Хакатон Native JS</p>{" "}
//         <input
//           type="number"
//           placeholder="Введите оценку студента"
//           min={0}
//           max={200}
//         />
//         <button style={{ color: "green" }}>Подтвердить</button>
//       </div>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <p>Командный Хакатон React</p>{" "}
//         <input
//           type="number"
//           placeholder="Введите оценку студента"
//           min={0}
//           max={200}
//         />
//         <button style={{ color: "green" }}>Подтвердить</button>
//       </div>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <p>Инртервью Финал</p>{" "}
//         <input
//           type="number"
//           placeholder="Введите оценку студента"
//           min={0}
//           max={200}
//         />
//         <button style={{ color: "green" }}>Подтвердить</button>
//       </div>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <p>Хакатон Финал</p>{" "}
//         <input
//           type="number"
//           placeholder="Введите оценку студента"
//           min={0}
//           max={200}
//         />
//         <button style={{ color: "green" }}>Подтвердить</button>
//       </div>
//       <div style={{ display: "flex", gap: "10px" }}>
//         <p style={{ fontSize: "20px" }}>KPI Студента: {oneUser.KPI} баллов</p>
//         <button
//           onClick={() => {
//             navigate("/profile");
//             dispatch(updateKPI());
//           }}
//           style={{ fontSize: "20px", color: "green" }}
//         >
//           Сохранить
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EditKPI;
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOneUser, updateKPI } from "../../store/users/usersActions";
import { useSelector } from "react-redux";

const EditKPI = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { oneUser, loading } = useSelector((state) => state.users);

  const [grades, setGrades] = useState({
    "Хакатон HTML & CSS": 0,
    "Интервью HTML & CSS": 0,
    "Хакатон основы JS": 0,
    "Интервью основы JS": 0,
    "Хакатон Native JS": 0,
    "Командный Хакатон React": 0,
    "Интервью Финал": 0,
    "Хакатон Финал": 0,
  });

  useEffect(() => {
    dispatch(getOneUser());
  }, []);

  const handleGradeChange = (subject, value) => {
    setGrades((prevGrades) => ({
      ...prevGrades,
      [subject]: parseInt(value),
    }));
  };

  const calculateAverageKPI = () => {
    const totalGrades = Object.values(grades).reduce(
      (acc, value) => acc + value,
      0
    );
    const numberOfSubjects = Object.keys(grades).length;
    return numberOfSubjects > 0 ? totalGrades / numberOfSubjects : 0;
  };

  const saveKPI = () => {
    const newKPI = calculateAverageKPI();
    dispatch(updateKPI(oneUser.id, newKPI));
    navigate("/profile");
  };

  return (
    <div
      style={{
        padding: "20px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <h1>
        Оценки студента {oneUser.first_name} {oneUser.last_name}
      </h1>

      {Object.keys(grades).map((subject) => (
        <div key={subject} style={{ display: "flex", gap: "10px" }}>
          <p>{subject}</p>
          <input
            type="number"
            placeholder="Введите оценку студента"
            min={0}
            max={200}
            value={grades[subject]}
            onChange={(e) => handleGradeChange(subject, e.target.value)}
          />
        </div>
      ))}

      <div style={{ display: "flex", gap: "10px" }}>
        <p style={{ fontSize: "20px" }}>
          KPI Студента: {calculateAverageKPI()} баллов
        </p>
        <button
          onClick={() => {
            navigate("/profile");
            dispatch(updateKPI({ kpi: calculateAverageKPI(), id: oneUser.id }));
          }}
          style={{ fontSize: "20px", color: "green" }}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default EditKPI;
