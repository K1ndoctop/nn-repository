import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/users/usersActions";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const postUser = () => {
    if (
      email.trim() &&
      password.trim() &&
      passwordConfirm.trim() &&
      password === passwordConfirm &&
      checkBox &&
      first_name &&
      last_name
    ) {
      dispatch(
        registerUser({
          is_admin: false,
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          password_confirm: passwordConfirm,
          groups: [],
          tasks: [],
          points: 0,
          coins: 0,
          payedMonths: 0,
        })
      );
      setFirst_name("");
      setLast_name("");
      setPasswordConfirm("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } else {
      alert("empty");
    }
  };

  return (
    <section className="bg-white ml-32">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-600" href="/">
              <span className="sr-only">Home</span>
              <img
                src="https://makers.kg/assets/logo-ec4e1b29.svg"
                alt="logo"
              />
            </a>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Регистрация
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              введите свой емайл и пароль, пароли должны быть не меньше 6
              символов
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Имя
                </label>

                <input
                  onChange={(e) => setFirst_name(e.target.value)}
                  value={first_name}
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full h-8 shadow-inner rounded-md border-stone-400 border bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Фамилия
                </label>

                <input
                  onChange={(e) => setLast_name(e.target.value)}
                  value={last_name}
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full h-8 shadow-inner rounded-md border-stone-400 border bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="Email"
                  name="email"
                  className="mt-1 w-full h-8 shadow-inner rounded-md border-stone-400 border bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Пароль
                </label>

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="text"
                  id="Password"
                  name="password"
                  className="mt-1 w-full h-8 shadow-inner rounded-md border-stone-400 border bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Повторный пароль
                </label>

                <input
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                  type="text"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full h-8 shadow-inner rounded-md border-stone-400 border bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    onChange={() => setCheckBox(!checkBox)}
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-stone-400 border bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    Я хочу получать электронные письма о событиях, обновлениях
                    продуктов и объявлениях компании.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  Создавая учетную запись, вы соглашаетесь с нашими
                  <a href="#" className="text-gray-700 underline">
                    условия и положения
                  </a>
                  и
                  <a href="#" className="text-gray-700 underline">
                    политика конфиденциальности
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  onClick={postUser}
                >
                  Создать аккаунт
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Уже есть аккаунт?
                  <a href="#" className="text-gray-700 underline">
                    <Link to="/login">Войти</Link>
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
