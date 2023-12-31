import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllUsers, getOneUser } from "../../store/users/usersActions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()
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
    return 16000 * month;
  };
  return (
    <section className=" max-h-screen">
      <div className="mx-auto h-full max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Оплата за курс
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-gray-900">{user.groups}</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">XXS</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label htmlFor="Line1Qty" className="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>

                    <input
                      type="number"
                      min={0}
                      max={maxInputValue}
                      value={month}
                      onChange={handleMonthsChange}
                      id="Line1Qty"
                      className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none "
                    />
                  </form>

                  <button className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£250</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>{calcPrice()}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <button
                    onClick={() => navigate('/home')}
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div
    //   style={{
    //     width: "90%",
    //     margin: "0 auto",
    //     display: "flex",
    //     flexDirection: "column",
    //     position: "relative",
    //     height: "150px",
    //   }}
    // >
    //   <h2>Оплата за курс</h2>
    //   <table style={{ height: "100px", textAlign: "center" }}>
    //     <thead>
    //       <tr>
    //         <th>Группа</th>
    //         <th>Стоимость одного месяца</th>
    //         <th>Количество месяцев</th>
    //         <th>Цена:</th>
    //       </tr>
    //     </thead>
    //     <tr>
    //       <td>{user.groups}</td>
    //       <td>16</td>
    //       <td>
    //         <input
    //           type="number"
    //           min={0}
    //           max={maxInputValue}
    //           value={month}
    //           onChange={handleMonthsChange}
    //         />
    //       </td>
    //       <td>{calcPrice()}</td>
    //     </tr>
    //   </table>
    //   <div style={{ position: "absolute", right: "0", bottom: "0" }}>
    //     <button
    //       style={{
    //         backgroundColor: "#ffac04",
    //         padding: "2px",
    //         border: "1px solid black",
    //         borderRadius: "5px",
    //       }}
    //       // onClick={}
    //     >
    //       Оплатить
    //     </button>
    //   </div>
    // </div>
  );
};

export default Cart;
