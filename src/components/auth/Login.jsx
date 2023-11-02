import React, { useState } from "react";
import { LoginUser, getOneUser } from "../../store/users/usersActions";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email.trim() && password.trim()) {
      dispatch(LoginUser({ email: email, password: password }));
      setEmail("");
      setPassword("");
      navigate("/home");
    } else {
      alert("empty");
    }
  };

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
          </section>

          <main className="flex justify-center mt-32 px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="hidden lg:relative lg:block mb-16">
                <a className="block " href="/">
                  <span className="sr-only">Home</span>
                  <img
                    src="https://makers.kg/assets/logo-ec4e1b29.svg"
                    alt="logo"
                  />
                </a>

                <h2 className="mt-6 text-2xl font-bold  sm:text-3xl md:text-4xl">
                  Войти
                </h2>

                <p className="mt-4 leading-relaxed ">
                  веедите свой емайл и пароль если вы ранее регистрировались
                </p>
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
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full h-8 rounded-md border-stone-400 border bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 mt-4">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full h-8 rounded-md border-stone-400 border bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="mt-4 col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  onClick={() => {
                    dispatch(getOneUser());
                    login();
                  }}
                >
                  войти в аккаунт
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  У вас еще нет аккаунта?
                  <a href="#" className="text-gray-700 underline">
                    <Link to="/">Регистрация</Link>

                  </a>
                  .
                </p>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Забыли Пароль?
                  <a href="#" className="text-gray-700 underline">
                    <Link to="/reset">Восстановить</Link>
                  </a>
                  .
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Login;
