import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllUsers, getOneUser } from "../../store/users/usersActions";

const Cart = () => {
  const dispatch = useDispatch();
  const { oneUser } = useSelector((state) => state.users);
  const [user, setUser] = useState("");

  useEffect(() => {
    dispatch(getOneUser());
  }, []);

  useEffect(() => {
    if (oneUser) {
      setUser(oneUser);
    }
  }, [oneUser]);

  const [month, setMonth] = useState(0);

  const maxInputValue = 4 - user.payedMonths;

  const handleMonthsChange = (e) => {
    const selectedMonths = parseInt(e.target.value, 10);
    if (
      !isNaN(selectedMonths) &&
      selectedMonths >= 0 &&
      selectedMonths <= maxInputValue
    ) {
      setMonth(selectedMonths);
    }
  };

  console.log(user, "gtr");

  const calcPrice = () => {
    return 16 * month;
  };
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: "150px",
      }}
    >
      <h2>Оплата за курс</h2>
      <table style={{ height: "100px", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Группа</th>
            <th>Стоимость одного месяца</th>
            <th>Количество месяцев</th>
            <th>Цена:</th>
          </tr>
        </thead>
        <tr>
          <td>{user.groups}</td>
          <td>16</td>
          <td>
            <input
              type="number"
              min={0}
              max={maxInputValue}
              value={month}
              onChange={handleMonthsChange}
            />
          </td>
          <td>{calcPrice()}</td>
        </tr>
      </table>
      <div style={{ position: "absolute", right: "0", bottom: "0" }}>
        <button
          style={{
            backgroundColor: "#ffac04",
            padding: "2px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
          // onClick={}
        >
          Оплатить
        </button>
      </div>
    </div>
  );
};

export default Cart;
